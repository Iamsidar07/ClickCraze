"use client"

import useCart from "@/app/(site)/(store)/store";
import { Product } from "@/types";
import { handleCheckout } from "@/utils/handleCheckout";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from "../Button";

type ProductInfoActionProps = {
    product: Product
}
const ProductInfoAction = ({ product }: ProductInfoActionProps) => {

    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    if (!product) {
        router.push('/')
    }

    async function handleBuyNow() {
        setIsLoading(true);
        const sessions = await handleCheckout({ cart: product });
        if (sessions && sessions.data.url) {
            router.replace(sessions.data.url);
        } else {
            console.log('Something went wrong!');
        }
        setIsLoading(false);
    }

    const handleAddToBag = () => {
        addItemToCart(product);
    }


    const addItemToCart = useCart(state => state.addItemToCart);

    return (
        <div className='flex flex-col sm:flex-row items-center gap-2 sm:gap-6'>
            <Button
                text='Add to Bag'
                type='secondary'
                handleClick={handleAddToBag}
            />
            <span>or</span>
            <Button
                text='Buy Now'
                type='primary'
                isLoading={isLoading}
                handleClick={handleBuyNow}
            />
        </div>
    )
}

export default ProductInfoAction