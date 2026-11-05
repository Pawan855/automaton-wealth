import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY || 're_123')

export async function POST(req: Request) {
  try {
    const body = await req.json()
    console.log('【entity-Razorpay¦canonical_name=Razorpay】 Webhook Hit:', JSON.stringify(body).substring(0, 200))

    if (body.event === 'payment_link.paid' || body.event === 'payment.captured') {
      const payment = body.payload?.payment_link?.entity || body.payload?.payment?.entity
      const email = payment?.customer?.email || payment?.email || 'customer@automaton.com'
      const amount = (payment?.amount_paid || payment?.amount || 59900) / 100

      console.log(`✅ Payment Success: ${email} paid ₹${amount}`)

      // Auto-Email - Try to send, fail ayina kuda webhook success avvali
      try {
        await resend.emails.send({
          from: 'Automaton Wealth <onboarding@resend.dev>',
          to: email,
          subject: '✅ PDF2Excel Pro Access - Thank you! ₹599 Paid',
          html: `
            <div style="font-family: sans-serif; padding: 20px; background: #0a0a0a; color: white;">
              <h1 style="color: #00ff88;">🚀 Thank you! Payment Received - ₹${amount}</h1>
              <p>Hey! Your PDF2Excel Pro Monthly Plan is ACTIVE!</p>
              <p><strong>Amount Paid:</strong> ₹${amount}</p>
              <p><strong>Valid Till:</strong> 30 days from today</p>
              <div style="background: #111; padding: 20px; border-radius: 10px; margin: 20px 0;">
                <h3>Your Access Link:</h3>
                <a href="https://automaton-wealth-ybo6.vercel.app/tool" style="background: #00ff88; color: black; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold;">Access PDF2Excel Pro Tool</a>
                <p style="margin-top: 15px; font-size: 14px; color: #888;">Login with your email: ${email}</p>
              </div>
              <p>Questions? Reply to this email - Pawan will help!</p>
              <p style="color: #888; font-size: 12px;">Automaton Wealth Engine - Pawan855/automaton-wealth - Built from Vijayawada</p>
            </div>
          `
        })
        console.log(`📧 Email sent to ${email}`)
      } catch (e) {
        console.log('Email failed (need API key):', e)
      }
    }

    return NextResponse.json({ status: 'ok', message: 'Webhook received - Automaton alive!' })
  } catch (err) {
    console.error('Webhook error:', err)
    return NextResponse.json({ status: 'ok' })
  }
}