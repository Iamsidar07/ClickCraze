"use client"
import useCart from '@/app/(site)/(store)/store';
import { Modal } from '..';

function ShowModal() {
    const { isOpenModel, cart } = useCart(state => ({
        isOpenModel: state.isOpenModel,
        cart: state.cart,
    }));
    return (
        <>
            {isOpenModel && <Modal cart={cart} />}
        </>
    )
}

export default ShowModal