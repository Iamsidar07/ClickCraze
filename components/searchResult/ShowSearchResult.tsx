import { Product } from '@/types'
import React from 'react'
import { ProductCard } from '..'
type ShowSearchResultProps = {
    products: Product[],
}
const ShowSearchResult = ({ products }: ShowSearchResultProps) => {

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-2 sm:gap-3  sm:row-span-8 flex-1 mt-6 sm:mt-6'>
            {
                products.map((product, index) => <ProductCard key={index} product={product} />)
            }
        </div>
    )
}

export default ShowSearchResult