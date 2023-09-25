"use client"
import useCart from '@/app/(site)/(store)/store';
import { handleCheckout } from '@/utils/handleCheckout';
import { useAuth } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { ImSpinner9 } from "react-icons/im"

const ModalAction = () => {
    const { userId} = useAuth();
    const router = useRouter();
    const [isLoading,setIsLoading] = useState(false);
    const { clearCart, cart } = useCart(state => ({
        clearCart: state.clearCart,
        cart: state.cart,
    }));
    async function handleCheckoutClick() {
        setIsLoading(true);
        if (!userId) {
            router.push('/signIn');
            return;
        }
        const sessions = await handleCheckout({ cart });
        if (sessions && sessions.data.url) {

            router.replace(sessions.data.url);
        } else {
            console.log('Something went wrong!');
        }
        setIsLoading(false);
    }


    return (
        <div className='grid place-items-center mt-6 gap-8'>
            <button onClick={handleCheckoutClick} className=' rounded-sm bg-blue-500 text-white border border-blue-500 font-medium px-4 py-3.5 duration-200 shadow-[5px_5px] shadow-blue-200 hover:-translate-x-1 hover:-translate-y-1  hover:shadow-[7px_7px] hover:rounded-2xl hover:shadow-blue-300 w-full max-w-[96%] disabled:bg-blue-200 disabled:border-blue-100 flex items-center justify-center gap-2'>
                Checkout {isLoading && <ImSpinner9 size={25} className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"/>}
            </button>

            <button onClick={() => clearCart()} className=' rounded-sm border border-black font-medium px-4 py-3.5 duration-200 shadow-[5px_5px] shadow-black hover:-translate-x-1 hover:-translate-y-1  hover:shadow-[7px_7px] hover:rounded-2xl hover:shadow-black w-full max-w-[96%]'>
                Clear Cart
            </button>
        </div>
    )
}

export default ModalAction