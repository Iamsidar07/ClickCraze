import { stripe } from '@/lib/stripe'
import { Metadata } from 'next'
import type { Stripe } from 'stripe'

export const metadata: Metadata = {
  title: "Checkout",
  description: "Checkout with our app"
}

export default async function ResultPage({
  searchParams,
}: {
  searchParams: { session_id: string }
}): Promise<JSX.Element> {
  if (!searchParams.session_id)
    throw new Error('Please provide a valid session_id (`cs_test_...`)')

  const checkoutSession: Stripe.Checkout.Session =
    await stripe.checkout.sessions.retrieve(searchParams.session_id, {
      expand: ['line_items', 'payment_intent'],
    })

  const paymentIntent = checkoutSession.payment_intent as Stripe.PaymentIntent

  return (
    <main className='grid place-items-center p-4 sm:p-8'>
      <h2>Status: {paymentIntent.status}</h2>
      <h3>Your purchase is successfull.</h3>
    </main>
  )
}