import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  company: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  honeypot: z.string().max(0).optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Invalid form data', details: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { name, email, company, message, honeypot } = parsed.data;

    if (honeypot) {
      return NextResponse.json({ success: true });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL ?? 'hello@praxisrecruitment.eu';

    if (!apiKey || apiKey === 'your_resend_api_key_here') {
      console.warn('[Contact] RESEND_API_KEY not configured — skipping email send');
      return NextResponse.json({ success: true, dev: true });
    }

    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: 'Praxis Recruitment <noreply@praxisrecruitment.eu>',
      to: contactEmail,
      replyTo: email,
      subject: `New enquiry from ${name}${company ? ` (${company})` : ''}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #36323d;">New Contact Enquiry</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 120px;">Name</td>
              <td style="padding: 8px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            ${company ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Company</td>
              <td style="padding: 8px 0;">${company}</td>
            </tr>` : ''}
            <tr>
              <td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Message</td>
              <td style="padding: 8px 0; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>
          <hr style="margin: 24px 0; border: none; border-top: 1px solid #eee;" />
          <p style="color: #999; font-size: 12px;">Sent via Praxis Recruitment contact form</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[Contact API]', err);
    return NextResponse.json({ error: 'Failed to send message. Please try again.' }, { status: 500 });
  }
}
