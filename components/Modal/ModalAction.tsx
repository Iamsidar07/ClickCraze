"use client"
import useCart from '@/app/(site)/(store)/store';
import { handleCheckout } from '@/utils/handleCheckout';
import { useAuth } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Button from '../Button';

const ModalAction = () => {
    const { userId } = useAuth();
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
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

    const handleClearCart = () => {
        clearCart();
    }

    return (
        <div className='grid place-items-center mt-6 gap-8'>
            <Button
                text='Checkout'
                type='primary'
                isLoading={isLoading}
                handleClick={handleCheckoutClick}
            />
            <Button
                text='Clear'
                type='secondary'
                handleClick={handleClearCart}
            />
        </div>
    )
}

export default ModalAction