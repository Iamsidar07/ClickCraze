import { ProductInCart } from '@/types'
import Image from 'next/image'
import React from 'react'
import CartProductAction from './CartAction'
type CartProductProps = {
    product: ProductInCart
}
const CartProduct = ({ product }: CartProductProps) => {
    
    return (
        <div className='flex flex-col items-stretch border-b p-2'>
            <div className='flex'>
                <div className='w-1/3 h-24 relative'>
                    <Image src={product.image} alt={product.title} fill className='object-contain absolute' />
                </div>
                <div className='flex-1 flex  justify-between px-2 sm:px-4 gap-6'>
                    <h3 className='font-semibold text-lg sm:text-xl'>{product.title}</h3>
                    <p className='font-semibold'>{product.price}$</p>
                </div>
            </div>
            <CartProductAction product={product}/>
        </div>
    )
}

export default CartProduct