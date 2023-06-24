import { NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY } from "@/config/api";
import { loadStripe, Stripe } from "@stripe/stripe-js";

const checkout = async ({lineItems} : any) => {
	let stripePromise: Promise<Stripe | null> | null = null

	const getStripe = () => {
		if(!stripePromise) {
			stripePromise = loadStripe(NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
		}
		return stripePromise
	}

	const stripe: Stripe | null = await getStripe()

	await stripe?.redirectToCheckout({
		mode: 'payment',
		lineItems,
		successUrl: `${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
		cancelUrl: window.location.origin
	})
}

export default checkout