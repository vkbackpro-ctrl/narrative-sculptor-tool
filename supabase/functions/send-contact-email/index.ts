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

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, company, projectType, budget, message }: ContactEmailRequest = await req.json();

    console.log("Sending contact email for:", name, email);

    // Build the email HTML
    let emailHtml = `
      <h2>Nouvelle demande de contact</h2>
      <p><strong>Nom :</strong> ${name}</p>
      <p><strong>Email :</strong> ${email}</p>
    `;

    if (phone) {
      emailHtml += `<p><strong>Téléphone :</strong> ${phone}</p>`;
    }

    if (company) {
      emailHtml += `<p><strong>Entreprise :</strong> ${company}</p>`;
    }

    if (projectType) {
      emailHtml += `<p><strong>Type de projet :</strong> ${projectType}</p>`;
    }

    if (budget) {
      emailHtml += `<p><strong>Budget :</strong> ${budget}</p>`;
    }

    emailHtml += `
      <p><strong>Message :</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
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
