import { stripe } from "@/lib/stripe";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(requet: NextRequest) {
    const requestBody = await requet.json();
    const { line_items } = requestBody;
    if (line_items.length === 0) {
        return NextResponse.json({
            status: false,
            message: "Cart is empty",
        }, { status: 405 });
    }
    try {
        const checkoutSession: Stripe.Checkout.Session = await stripe.checkout.sessions.create({
            mode: 'payment',
            line_items,
            success_url: `https://click-craze.vercel.app/checkout?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `https://click-craze.vercel.app/cancel`,
            invoice_creation: {
                enabled: true
            },
        })

        return NextResponse.json({
            status: true,
            message: "Checkout  successfully",
            data: checkoutSession
        }, { status: 200 });

    } catch (error: any) {
        console.log("Something went wrong", error);
        return NextResponse.json({
            status: false,
            message: error.message
        }, { status: 500 })
    }
}
