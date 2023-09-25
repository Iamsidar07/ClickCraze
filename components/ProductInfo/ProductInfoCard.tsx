import { Product } from '@/types'
import Image from 'next/image'
import React from 'react'
import { AiOutlineStar } from 'react-icons/ai'
import { GoPeople } from 'react-icons/go'
import ProductInfoAction from './ProductInfoAction'
import { PortableText } from '@portabletext/react'
import { RichTextComponents } from '../RichTextComponent'
import { PiCurrencyInrDuotone } from 'react-icons/pi'

type ProductInfoCardProps = {
    product: Product,
}
const ProductInfoCard = ({ product }: ProductInfoCardProps) => {

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 mt-12 sm:mt-24'>
            <div className='relative  w-full h-72 sm:h-full sm:max-h-[75%] mx-auto'>
                <Image src={product.image} alt={product.title} fill className='absolute object-cover aspect-square' />
            </div>
            <div className='flex flex-col gap-2 p-4'>
                <h1 className='text-2xl sm:text-4xl font-bold'>{product.title}</h1>
                <span className='text-sm rounded-full bg-blue-500 text-white font-normal py-1.5 px-4 w-fit'>#{product.category}</span>
            
                <div className='flex items-center gap-1'>
                    <p className='text-<p>{product.price}</p>gray-500 font-bold text-xl'>{product.price}</p>
                    <PiCurrencyInrDuotone size={20} />
                </div>
                <p className='text-gray-500 text-sm'>incl. tax and shipping.</p>
                <div className='flex items-center gap-2 mb-12'>
                    <p className='text-lg sm:text-2xl'>{product.rating?.rate}</p>
                    <AiOutlineStar size={25} className='text-blue-500' />
                    <p className='text-lg sm:text-2xl ml-4'>{product.rating?.count}</p>
                    <GoPeople size={25} className='text-blue-500' />
                </div>
                <ProductInfoAction product={product} />
                <div className='mt-12'>
                <PortableText value={product.description} components={RichTextComponents}/>
                </div>
                <div>
                </div>
            </div>
        </div>
    )
}

export default ProductInfoCard