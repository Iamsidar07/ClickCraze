import { Product, ProductInCart } from "@/types";
import { formatAmountForStripe } from "./stripeHelpers";
const CURRENCY = 'inr';
export async function handleCheckout({ cart }: { cart: ProductInCart[] | Product }) {
    try {
        let lineItems;
        if (Array.isArray(cart)) {
            lineItems = cart.map((product) => ({
                quantity: product.quantity,
                price_data: {
                    currency: CURRENCY,
                    product_data: {
                        name: product.title,
                    },
                    unit_amount: formatAmountForStripe(
                        product.price,
                        CURRENCY
                    ),
                },
            }))
        } else {
            lineItems = [
                {
                    quantity: 1,
                    price_data: {
                        currency: CURRENCY,
                        product_data: {
                            name: cart.title,
                        },
                        unit_amount: formatAmountForStripe(
                            cart.price,
                            CURRENCY
                        ),
                    },
                },
            ];
        }

        const response = await fetch('/api/checkout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                line_items: lineItems,
            }),
        });
        const sessions = await response.json();
        return sessions;
    } catch (error: any) {
        console.log(error)
        return error;
    }
}