import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const body = await req.json()
  console.log('Razorpay Webhook Hit:', body)

  // Payment success ayithe log chey - tarvata email logic add chestham
  if (body.event === 'payment_link.paid') {
    const email = body.payload?.payment_link?.entity?.customer?.email || 'customer'
    const amount = body.payload?.payment_link?.entity?.amount_paid || 59900
    
    console.log(`✅ Payment Success: ${email} paid ₹${amount/100}`)
    
    // TODO: Ikkada auto-email code vastundi - Resend tho
    // For now, log chesi success return chesthunnam
  }

  return NextResponse.json({ status: 'ok', message: 'Webhook received - Automaton alive!' })
}