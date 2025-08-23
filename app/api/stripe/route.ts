// app/api/stripe/route.ts
import { NextApiRequest, NextApiResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-07-30.basil',
});

export async function handler(req: NextApiRequest) {
  console.log('STRIPE_SECRET_KEY:', process.env.STRIPE_SECRET_KEY);
  console.log('STRIPE_WEBHOOK_SECRET:', process.env.STRIPE_WEBHOOK_SECRET);

  const sig = req.headers.get('stripe-signature');
  const body = await req.text();

  let event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch (err) {
    return new NextApiResponse({ status: 400, body: { error: 'Invalid signature' } });
  }

  if (event.type === 'payment_intent.succeeded') {
    // Handle payment intent succeeded event
  }

  return new NextApiResponse({ status: 200, body: { received: true } });
}