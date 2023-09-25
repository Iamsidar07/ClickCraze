import useCart from '@/app/(site)/(store)/store'
import React from 'react'
import CartProduct from './CartProduct'
import ModalOverlay from './ModalOverlay'
import CloseModalIcon from './CloseModalIcon'
import ModalAction from './ModalAction'
import { Product, ProductInCart } from '@/types'
import { calculateCartCosts } from '@/utils'
type ModalProps = {
    cart: ProductInCart[]
}
const Modal = ({ cart }: ModalProps) => {
   

    const { SHIPPING,SUBTOTAL, TOTAL, WAT } = calculateCartCosts(cart);
    
    return (<div className='fixed inset-0 w-full min-h-screen z-30'>
        <ModalOverlay />
        <div className='border flex flex-col bg-white w-screen sm:w-3/4 max-w-xl absolute top-0 right-0 gap-4 h-full min-h-screen overflow-y-scroll pb-[5%]'>
            <div className='p-4 flex items-center justify-between'>
                <h2 className='text-lg sm:text-xl font-medium'>Shopping Cart</h2>
                <CloseModalIcon />
            </div>
            <div className='border-t'></div>
            {
                cart.length === 0 ? <div className='grid place-items-center'>
                    <p>No products in your cart, Start by adding product...</p>
                </div> : <div className='flex-1 px-2'>
                    <div className=' flex flex-col overflow-y-auto max-h-[70vh] gap-6'>
                        {
                            cart.map((product) => <CartProduct key={product._id} product={product} />)
                        }
                    </div>
                    <div className='border-t'></div>
                    <div className='flex items-center justify-between p-2 mt-6'>
                        <p className='text-gray-500'>Subtotal</p>
                        <p className='text-gray-500'>{SUBTOTAL}</p>
                    </div>
                    <div className='flex items-center justify-between p-2'>
                        <p className='text-gray-500'>Shipping</p>
                        <p className='text-gray-500'>{SHIPPING}</p>
                    </div>
                    <div className='flex items-center justify-between p-2'>
                        <p className='text-gray-500'>WAT(20%)</p>
                        <p className='text-gray-500'>{WAT}</p>
                    </div>
                    <div className='border-t'></div>
                    <div className='flex items-center justify-between p-2 text-xl'>
                        <p className='font-bold'>Total</p>
                        <p className='font-bold'>{TOTAL.toFixed(3)}</p>
                    </div>
                    <ModalAction/>
                </div>
            }

        </div>

    </div>)
}

export default Modal