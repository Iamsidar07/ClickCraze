"use client"
import useCart from '@/app/(site)/(store)/store';
import { RxCross1 } from 'react-icons/rx'

function CloseModalIcon() {
    const { setIsOpenModel } = useCart(state => ({
        setIsOpenModel: state.setIsOpenModel,
        cart: state.cart,

    }));
    return (
        <RxCross1 size={25} className='hover:text-blue-500 cursor-pointer' onClick={() => setIsOpenModel()} />
    )
}

export default CloseModalIcon