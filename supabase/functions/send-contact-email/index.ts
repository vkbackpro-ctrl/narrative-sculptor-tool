import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  projectType?: string;
  budget?: string;
  message: string;
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

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, company, projectType, budget, message }: ContactEmailRequest = await req.json();

    // Validate input lengths to prevent abuse
    if (name && name.length > 100) {
      return new Response(JSON.stringify({ error: "Name too long" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }
    if (email && email.length > 255) {
      return new Response(JSON.stringify({ error: "Email too long" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }
    if (message && message.length > 5000) {
      return new Response(JSON.stringify({ error: "Message too long" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    console.log("Sending contact email for:", escapeHtml(name));

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
        subject: `Nouvelle demande de contact - ${name}`,
        html: emailHtml,
      }),
    });

    const data = await emailResponse.json();

    if (!emailResponse.ok) {
      console.error("Resend API error:", data);
      throw new Error(data.message || "Failed to send email");
    }

    console.log("Email sent successfully:", data);

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
