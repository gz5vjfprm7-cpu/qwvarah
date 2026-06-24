import { Resend } from 'resend';
import twilio from 'twilio';

const resend = new Resend(process.env.RESEND_API_KEY);
const twilioClient = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, businessType, service, budget, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const results = { email: null, sms: null };

  // ── Email via Resend ──────────────────────────────────────────────────────
  try {
    await resend.emails.send({
      from: `Qwvarah Leads <leads@${process.env.NOTIFY_FROM_DOMAIN}>`,
      to: process.env.NOTIFY_EMAIL,
      subject: `New Lead: ${name} — ${service}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #050a0e; color: #e8f0f5; border-radius: 12px; overflow: hidden; border: 1px solid rgba(0,255,136,0.2);">
          <div style="background: #0a1118; padding: 24px 32px; border-bottom: 1px solid rgba(0,255,136,0.15);">
            <p style="margin: 0; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; color: #00ff88;">New Intake Submission</p>
            <h1 style="margin: 8px 0 0; font-size: 22px; font-weight: 700; color: #e8f0f5;">${name}</h1>
          </div>
          <div style="padding: 32px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 16px; font-size: 12px; color: #7a9aaa; text-transform: uppercase; letter-spacing: 0.08em; width: 140px; border-bottom: 1px solid rgba(0,255,136,0.08);">Name</td>
                <td style="padding: 12px 16px; font-size: 15px; font-weight: 600; color: #e8f0f5; border-bottom: 1px solid rgba(0,255,136,0.08);">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 16px; font-size: 12px; color: #7a9aaa; text-transform: uppercase; letter-spacing: 0.08em; border-bottom: 1px solid rgba(0,255,136,0.08);">Business Type</td>
                <td style="padding: 12px 16px; font-size: 15px; font-weight: 600; color: #e8f0f5; border-bottom: 1px solid rgba(0,255,136,0.08);">${businessType}</td>
              </tr>
              <tr>
                <td style="padding: 12px 16px; font-size: 12px; color: #7a9aaa; text-transform: uppercase; letter-spacing: 0.08em; border-bottom: 1px solid rgba(0,255,136,0.08);">Service Interest</td>
                <td style="padding: 12px 16px; font-size: 15px; font-weight: 600; color: #00ff88; border-bottom: 1px solid rgba(0,255,136,0.08);">${service}</td>
              </tr>
              <tr>
                <td style="padding: 12px 16px; font-size: 12px; color: #7a9aaa; text-transform: uppercase; letter-spacing: 0.08em; border-bottom: 1px solid rgba(0,255,136,0.08);">Budget</td>
                <td style="padding: 12px 16px; font-size: 15px; font-weight: 600; color: #e8f0f5; border-bottom: 1px solid rgba(0,255,136,0.08);">${budget}</td>
              </tr>
              <tr>
                <td style="padding: 12px 16px; font-size: 12px; color: #7a9aaa; text-transform: uppercase; letter-spacing: 0.08em;">Email</td>
                <td style="padding: 12px 16px; font-size: 15px; font-weight: 600; color: #e8f0f5;">${email}</td>
              </tr>
            </table>
          </div>
          <div style="padding: 20px 32px; background: #0a1118; border-top: 1px solid rgba(0,255,136,0.1); text-align: center;">
            <a href="mailto:${email}" style="display: inline-block; background: #00ff88; color: #050a0e; font-weight: 700; font-size: 14px; padding: 12px 28px; border-radius: 6px; text-decoration: none;">Reply to ${name}</a>
          </div>
        </div>
      `,
    });
    results.email = 'sent';
  } catch (err) {
    console.error('Resend error:', err);
    results.email = 'failed';
  }

  // ── SMS via Twilio ────────────────────────────────────────────────────────
  try {
    await twilioClient.messages.create({
      from: process.env.TWILIO_FROM_NUMBER,
      to: process.env.NOTIFY_PHONE,
      body: [
        `New Qwvarah lead:`,
        `Name: ${name}`,
        `Business: ${businessType}`,
        `Service: ${service}`,
        `Budget: ${budget}`,
        `Email: ${email}`,
      ].join('\n'),
    });
    results.sms = 'sent';
  } catch (err) {
    console.error('Twilio error:', err);
    results.sms = 'failed';
  }

  return res.status(200).json({ success: true, results });
}
