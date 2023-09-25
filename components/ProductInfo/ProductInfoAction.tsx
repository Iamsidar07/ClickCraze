"use client"

import useCart from "@/app/(site)/(store)/store";
import { Product } from "@/types";
import { handleCheckout } from "@/utils/handleCheckout";
import { useRouter } from "next/navigation";
type ProductInfoActionProps = {
    product: Product
}
const ProductInfoAction = ({ product }: ProductInfoActionProps) => {
    const router = useRouter();
    if (!product) {
        window.location.href = '/'
    }

    async function handleBuyNow() {
        const sessions = await handleCheckout({ cart: product });
        if (sessions && sessions.data.url) {
            router.replace(sessions.data.url);
        } else {
            console.log('Something went wrong!');
        }
    }


    const addItemToCart = useCart(state => state.addItemToCart);
    return (
        <div className='flex flex-col sm:flex-row items-center gap-2 sm:gap-6'>
            <button onClick={() => addItemToCart(product)} className=' rounded-sm border border-blue-500 font-medium px-4 py-3.5 duration-200 shadow-[5px_5px] hover:shadow-[7px_7px] hover:rounded-2xl hover:shadow-blue-500 w-full hover:-translate-x-1 hover:-translate-y-1'>Add to Bag</button>
            <span>or</span>
            <button onClick={handleBuyNow} className=' rounded-sm bg-blue-500 text-white border border-blue-500 font-medium px-4 py-3.5 duration-200 shadow-[5px_5px] shadow-blue-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[7px_7px] hover:rounded-2xl hover:shadow-blue-300 w-full'>Buy Now</button>
        </div>
    )
}

export default ProductInfoAction