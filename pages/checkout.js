import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);
// https://github.com/stripe-samples/nextjs-typescript-react-stripe-js
export default function Checkout() {
  const [error, setError] = useState(false);

  const handleClick = async event => {
    // Get Stripe.js instance
    const stripe = await stripePromise;

    // Call your backend to create the Checkout Session
    const { sessionId } = await fetch(
      '/api/checkout/session',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ quantity: 1 }),
      }
    ).then(res => res.json());

    console.log(sessionId);
    // When the customer clicks on the button, redirect them to Checkout.
    const { error } = await stripe.redirectToCheckout({
      sessionId: sessionId.id,
    });

    // if (result.error) {
    //   // If `redirectToCheckout` fails due to a browser or network
    //   // error, display the localized error message to your customer
    //   // using `result.error.message`.
    //   setError(true);
    // }
  };

  return (
    <div>
      <h2>Checkout</h2>
      <button role="link" onClick={handleClick}>
        Checkout
      </button>
      {String(error)}
    </div>
  );
}
