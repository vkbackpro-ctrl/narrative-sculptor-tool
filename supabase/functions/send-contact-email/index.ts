import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

// Allowed origins for CORS - restrict to production and development domains
const allowedOrigins = [
  'https://vkback.com',
  'https://www.vkback.com',
  'https://narrative-sculptor-tool.lovable.app',
  'https://id-preview--707a7cdd-ca5d-4438-a627-5efc8cdac278.lovable.app',
  'http://localhost:5173',
  'http://localhost:8080',
];

function getCorsHeaders(req: Request): Record<string, string> {
  const origin = req.headers.get('origin') || '';
  const allowedOrigin = allowedOrigins.includes(origin) ? origin : allowedOrigins[0];
  
  return {
    "Access-Control-Allow-Origin": allowedOrigin,
    "Access-Control-Allow-Headers":
      "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
  };
}

interface ContactEmailRequest {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  projectType?: string;
  budget?: string;
  message: string;
  website?: string; // Honeypot field - should always be empty
  formLoadTime?: number; // Timestamp when form was loaded
}

// HTML escape function to prevent XSS attacks
function escapeHtml(text: string): string {
  if (!text) return '';
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

// In-memory rate limiting (resets on function cold start)
// For production, consider using Upstash Redis or Supabase database
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour in milliseconds
const RATE_LIMIT_MAX_REQUESTS = 5; // Max 5 requests per IP per hour

function checkRateLimit(clientIP: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(clientIP);
  
  if (!record || now > record.resetTime) {
    // Create new record or reset expired one
    rateLimitMap.set(clientIP, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }
  
  if (record.count >= RATE_LIMIT_MAX_REQUESTS) {
    return false; // Rate limit exceeded
  }
  
  record.count++;
  return true;
}

// Clean up old entries periodically (simple garbage collection)
function cleanupRateLimitMap() {
  const now = Date.now();
  for (const [ip, record] of rateLimitMap.entries()) {
    if (now > record.resetTime) {
      rateLimitMap.delete(ip);
    }
  }
}

const handler = async (req: Request): Promise<Response> => {
  const corsHeaders = getCorsHeaders(req);
  
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Get client IP for rate limiting
    const clientIP = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 
                     req.headers.get('x-real-ip') || 
                     'unknown';
    
    // Check rate limit
    if (!checkRateLimit(clientIP)) {
      console.warn(`Rate limit exceeded for IP: ${clientIP}`);
      return new Response(
        JSON.stringify({ error: "Trop de demandes. Veuillez réessayer dans une heure." }),
        {
          status: 429,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }
    
    // Periodic cleanup of rate limit map
    if (Math.random() < 0.1) { // 10% chance to run cleanup
      cleanupRateLimitMap();
    }

    const { name, email, phone, company, projectType, budget, message, website, formLoadTime }: ContactEmailRequest = await req.json();

    // Honeypot check - if the hidden field is filled, it's likely a bot
    if (website && website.trim() !== '') {
      console.warn(`Honeypot triggered from IP: ${clientIP}`);
      // Return success to not alert the bot, but don't actually send
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    // Time-based bot detection - form submitted too quickly (less than 2 seconds)
    if (formLoadTime) {
      const submitTime = Date.now();
      const timeDiff = submitTime - formLoadTime;
      if (timeDiff < 2000) { // Less than 2 seconds
        console.warn(`Form submitted too quickly (${timeDiff}ms) from IP: ${clientIP}`);
        return new Response(JSON.stringify({ success: true }), {
          status: 200,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        });
      }
    }

    // Validate required fields
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Veuillez remplir tous les champs obligatoires." }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Validate input lengths to prevent abuse
    if (name.length > 100) {
      return new Response(JSON.stringify({ error: "Le nom est trop long." }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }
    if (email.length > 255) {
      return new Response(JSON.stringify({ error: "L'email est trop long." }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }
    if (message.length > 5000) {
      return new Response(JSON.stringify({ error: "Le message est trop long (max 5000 caractères)." }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ error: "Format d'email invalide." }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    console.log("Processing contact email request from:", clientIP);

    // Escape all user inputs before building HTML
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone || '');
    const safeCompany = escapeHtml(company || '');
    const safeProjectType = escapeHtml(projectType || '');
    const safeBudget = escapeHtml(budget || '');
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br>');

    // Build the email HTML with escaped values
    let emailHtml = `
      <h2>Nouvelle demande de contact</h2>
      <p><strong>Nom :</strong> ${safeName}</p>
      <p><strong>Email :</strong> ${safeEmail}</p>
    `;

    if (phone) {
      emailHtml += `<p><strong>Téléphone :</strong> ${safePhone}</p>`;
    }

    if (company) {
      emailHtml += `<p><strong>Entreprise :</strong> ${safeCompany}</p>`;
    }

    if (projectType) {
      emailHtml += `<p><strong>Type de projet :</strong> ${safeProjectType}</p>`;
    }

    if (budget) {
      emailHtml += `<p><strong>Budget :</strong> ${safeBudget}</p>`;
    }

    emailHtml += `
      <p><strong>Message :</strong></p>
      <p>${safeMessage}</p>
      <hr>
      <p><em>Email envoyé depuis le formulaire de contact VKBack</em></p>
      <p><small>IP: ${clientIP}</small></p>
    `;

    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'VKBack Contact <onboarding@resend.dev>',
        to: ['vkbackpro@gmail.com'],
        reply_to: email,
        subject: `Nouvelle demande de contact - ${safeName}`,
        html: emailHtml,
      }),
    });

    const data = await emailResponse.json();

    if (!emailResponse.ok) {
      // Log detailed error server-side only
      console.error("Resend API error:", JSON.stringify({
        status: emailResponse.status,
        error: data,
        clientIP,
        timestamp: new Date().toISOString()
      }));
      // Return generic error to client
      throw new Error("Email service error");
    }

    console.log("Email sent successfully for:", clientIP);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    // Log full error details server-side only
    console.error("Error in send-contact-email function:", {
      message: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString()
    });
    
    // Return generic error message to client - never expose internal details
    return new Response(
      JSON.stringify({ 
        error: "Une erreur est survenue lors de l'envoi de votre message. Veuillez réessayer dans quelques instants." 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
