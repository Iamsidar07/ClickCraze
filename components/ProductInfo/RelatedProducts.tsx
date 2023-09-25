import { Product } from '@/types'
import React from 'react'
import { ProductCard } from '..'
type RelatedProductsProps = {
    products: Product[]
}
const RelatedProducts = ({ products }: RelatedProductsProps) => {
    return (
        <section className='py-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 3xl:grid-cols-5 gap-2 sm:gap-4 '>
            {
                products.map((product, index) => <ProductCard key={index} product={product} />)
            }
        </section>
    )
}

export default RelatedProducts