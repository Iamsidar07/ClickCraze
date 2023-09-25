"use client"
import useCart from '@/app/(site)/(store)/store'
import { Product } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineStar } from 'react-icons/ai'
import { PiCurrencyInrDuotone } from 'react-icons/pi'
type ProductCardProps = {
    product: Product
}
const ProductCard = ({ product }: ProductCardProps) => {
    const addItemToCart = useCart(state => state.addItemToCart);
    const handleProductClick = () => {
        addItemToCart(product);
    }
    return (
        <div className='border rounded-2xl duration-200 transition-all ease-linear group hover:border-blue-500 hover:shadow-[7px_7px] hover:-translate-x-1 hover:-translate-y-1 z-20 bg-white max-w-sm'>
            <Link href={`/product/${product._id}`}>
                <div className='w-full pt-1 rounded-t-2xl'>
                    <div className='relative w-full h-60 mx-auto p-2'>
                        <Image src={product.image} alt={product.title} fill className='absolute object-cover w-full h-full aspect-square rounded-t-2xl' />
                    </div>
                </div>
            </Link>
            <div className='text-left py-3 px-2.5 border-t bg-gray-50 rounded-b-2xl'>
                <h2 className='font-medium truncate'>{product.title}</h2>
                <div className='flex items-center justify-between mt-2'>
                    <div className='flex items-center gap-1'>
                        <p>{product.price}</p>
                        <PiCurrencyInrDuotone size={20} className='text-blue-500' />
                    </div>
                    <div className='flex items-center gap-2'>
                        <p>{product.rating.rate}</p>
                        <AiOutlineStar size={20} className='text-blue-500' />
                    </div>
                </div>
                <div className='flex items-center justify-end mt-2'>
                    <button onClick={handleProductClick} className=' border border-blue-500 font-medium px-4 py-3.5 duration-200 rounded hover:rounded-2xl hover:shadow-[5px_5px] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-blue-500'>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard