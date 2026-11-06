import { NextResponse } from 'next/server';
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const pl = body?.payload?.payment_link?.entity || {};
    const pay = body?.payload?.payment?.entity || {};
    const custEmail = pl?.customer?.email || pay?.email || pay?.notes?.email || 'no-email';
    const amount = (pay?.amount || pl?.amount || 100) / 100;
    const pid = pay?.id || 'unknown';
    console.log(`SUCCESS ${custEmail} ${amount} ${pid}`);
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'muvvapawan@gmail.com',
      subject: `Payment ₹${amount} - ${custEmail} - ${pid}`,
      html: `<h3>Payment Received ₹${amount}</h3><p>Customer: ${custEmail}</p><p>ID: ${pid}</p><p>Link: ${pl?.id}</p>`,
    });
    if (error) { console.error(error); return NextResponse.json({ error }, { status: 500 }); }
    return NextResponse.json({ success: true, data });
  } catch (e: any) { return NextResponse.json({ error: e.message }, { status: 500 }); }
}
export async function GET() { return NextResponse.json({ status: 'Live' }); }