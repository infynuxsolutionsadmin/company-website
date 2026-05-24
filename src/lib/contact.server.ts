import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

// --- Validation Schema (shared with client for inline errors) ----------------
export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please enter a valid email address"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(5000),
});

export type ContactInput = z.infer<typeof contactSchema>;

// --- Server Function ---------------------------------------------------------
// Runs ONLY on the server - RESEND_API_KEY never reaches the browser bundle.
export const submitContactForm = createServerFn({ method: "POST" })
  .inputValidator((raw: ContactInput) => {
    // Parse & validate - throws a ZodError (serialised to 400) on failure
    return contactSchema.parse(raw);
  })
  .handler(async ({ data }) => {
    const { name, email, message } = data;

    // -- 1. Save to Supabase -------------------------------------------------
    // Use import.meta.env - Vite statically injects VITE_* vars into both
    // client and server bundles; process.env is NOT available in CF Workers.
    const supabaseUrl = import.meta.env["VITE_SUPABASE_URL"] as string | undefined;
    const supabaseKey = import.meta.env["VITE_SUPABASE_ANON_KEY"] as string | undefined;

    if (!supabaseUrl || !supabaseKey) {
      throw new Error(
        "Supabase is not configured. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env"
      );
    }

    const dbRes = await fetch(`${supabaseUrl}/rest/v1/contact_submissions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
        Prefer: "return=minimal",
      },
      body: JSON.stringify({ name, email, message }),
    });

    if (!dbRes.ok) {
      const errText = await dbRes.text();
      console.error("[Supabase insert error]", dbRes.status, errText);
      throw new Error(
        "Failed to save your message. Please try again in a moment."
      );
    }

    // -- 2. Send email via Resend --------------------------------------------
    const resendKey = import.meta.env["VITE_RESEND_API_KEY"] as string | undefined;
    const fromEmail = (import.meta.env["VITE_RESEND_FROM_EMAIL"] as string | undefined) ?? "onboarding@resend.dev";

    if (!resendKey) {
      // DB insert succeeded - log the missing config but don't fail the user
      console.error(
        "[Contact] RESEND_API_KEY is not set. Email not sent, but submission was saved."
      );
      return { ok: true, emailSent: false };
    }

    const ts = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

    const emailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendKey}`,
      },
      body: JSON.stringify({
        from: `INFYNUX <${fromEmail}>`,
        to: ["infynuxsolutions@gmail.com"],
        reply_to: email,
        subject: `New enquiry from ${name} - INFYNUX`,
        html: `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width,initial-scale=1"/></head>
<body style="margin:0;padding:0;background:#05050F;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#05050F;padding:40px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#0A0A1F;border-radius:16px;overflow:hidden;border:1px solid rgba(0,229,255,0.15);">
        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,rgba(0,229,255,0.12),rgba(123,47,190,0.12));padding:36px 40px 28px;border-bottom:1px solid rgba(255,255,255,0.06);">
            <p style="margin:0 0 4px;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:#00E5FF;">INFYNUX - Incoming Transmission</p>
            <h1 style="margin:0;font-size:26px;font-weight:700;color:#FFFFFF;">New Contact Request</h1>
          </td>
        </tr>
        <!-- Body -->
        <tr>
          <td style="padding:32px 40px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.05);width:90px;font-size:11px;letter-spacing:0.1em;text-transform:uppercase;color:#64748B;vertical-align:top;">From</td>
                <td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.05);font-size:15px;font-weight:600;color:#FFFFFF;">${name}</td>
              </tr>
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.05);font-size:11px;letter-spacing:0.1em;text-transform:uppercase;color:#64748B;vertical-align:top;">Reply-to</td>
                <td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.05);">
                  <a href="mailto:${email}" style="color:#00E5FF;text-decoration:none;font-size:15px;">${email}</a>
                </td>
              </tr>
            </table>
            <div style="margin-top:28px;">
              <p style="margin:0 0 10px;font-size:11px;letter-spacing:0.1em;text-transform:uppercase;color:#64748B;">Message</p>
              <div style="background:#05050F;border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:20px 24px;font-size:15px;line-height:1.75;color:#CBD5E1;white-space:pre-wrap;">${message}</div>
            </div>
          </td>
        </tr>
        <!-- Footer -->
        <tr>
          <td style="padding:20px 40px 32px;text-align:center;font-size:11px;color:#334155;border-top:1px solid rgba(255,255,255,0.05);">
            INFYNUX &middot; Thiruvarur, Tamilnadu &middot; ${ts} IST
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`,
      }),
    });

    if (!emailRes.ok) {
      const errBody = await emailRes.json().catch(() => ({}));
      console.error("[Resend error]", emailRes.status, errBody);
      // Submission is already saved - don't fail the user
      return { ok: true, emailSent: false };
    }

    return { ok: true, emailSent: true };
  });
