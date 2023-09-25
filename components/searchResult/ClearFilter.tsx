"use client"
import { Product } from '@/types';
import { RxCross1 } from 'react-icons/rx';
type ClearFilterProps = {
    products: Product[],
    appliedFilter: String[],
    handleClearFilter: () => void;
}
const ClearFilter = ({ appliedFilter, handleClearFilter, products }: ClearFilterProps) => {
    return (
        <h1 className='flex items-center gap-2'>{products.length} Results 
            {
                appliedFilter.length > 0 && (
                    <span className='flex items-center gap-2'>
                        {appliedFilter.join(":")}
                        <RxCross1 size={15} className='cursor-pointer ml-2' onClick={handleClearFilter} />
                    </span>
                )
            }
        </h1>
    )
}

export default ClearFilter