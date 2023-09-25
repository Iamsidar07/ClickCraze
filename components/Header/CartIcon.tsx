"use client"
import useCart from "@/app/(site)/(store)/store";
import { AiOutlineShoppingCart } from "react-icons/ai"

function CartIcon() {
    const { cart, setIsOpenModel } = useCart(state => ({
        cart: state.cart,
        setIsOpenModel: state.setIsOpenModel,
    }));
    return (
        <button onClick={setIsOpenModel} className='grid place-items-center relative'>
            <AiOutlineShoppingCart size={25} className='text-blue-500' />
            {
                cart.length > 0 && (
                    <div className='absolute -top-2 -right-2 bg-blue-500 w-5 h-5 rounded-full grid place-items-center text-white text-xs font-medium pointer-events-none'>
                        <span>{cart.length}</span>
                    </div>
                )
            }
        </button>
    )
}

export default CartIcon