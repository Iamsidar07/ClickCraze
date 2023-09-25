'use client'

import useCart from "@/app/(site)/(store)/store"
import { ProductInCart } from "@/types"
import { AiOutlineDelete, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
type CartProductActionProps = {
    product: ProductInCart
}
function CartProductAction({ product }: CartProductActionProps) {
    const { addItemToCart, decreaseQuantity, removeItemFromCart } = useCart(state => ({
        addItemToCart: state.addItemToCart,
        decreaseQuantity: state.decreaseQuantity,
        removeItemFromCart: state.removeItemFromCart
    }))
    return (
        <div className='flex items-stretch justify-end'>
            <button className='w-8 h-8 grid place-content-center border rounded-l cursor-pointer' onClick={() => addItemToCart(product)}>
                <AiOutlinePlus size={20} />
            </button>
            <button className='w-8 h-8 grid place-content-center border px-2'>
                {product.quantity}
            </button>
            <button className='w-8 h-8 grid place-content-center border rounded-r cursor-pointer p-2' onClick={() => decreaseQuantity(product._id)}>
                <AiOutlineMinus size={20} />
            </button>
            <button className='w-8 h-8 grid place-content-center border rounded-r cursor-pointer p-2' onClick={() => removeItemFromCart(product._id)}>
                <AiOutlineDelete size={20} />
            </button>
        </div>
    )
}

export default CartProductAction