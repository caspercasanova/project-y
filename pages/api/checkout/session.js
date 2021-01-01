import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2020-08-27',
});

export default async (req, res) => {
  const { quantity } = req.body;
  console.log(quantity);
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price: `price_1GyprmDHI54VOJ0H0B9fbwIV`,
        quantity,
      },
    ],
    mode: 'payment',
    success_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${req.headers.origin}/checkout`,
  });

  //console.log(session);
  res.status(200).json({ sessionId: session });
};
