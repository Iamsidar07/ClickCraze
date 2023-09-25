"use client"
import useCart from '@/app/(site)/(store)/store';

function ModalOverlay() {
    const { setIsOpenModel } = useCart(state => ({
        setIsOpenModel: state.setIsOpenModel,
        cart: state.cart,
    }));
    return (
        <div className='absolute inset-0 bg-black opacity-70 cursor-pointer' onClick={() => setIsOpenModel()}>
        </div>
    )
}

export default ModalOverlay