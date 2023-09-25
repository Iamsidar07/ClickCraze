
"use client"
import { Category } from '@/types'
import { useRouter, } from 'next/navigation'
import React, { useState } from 'react'
type CategoryProps = {
    categories: Category[],
}
const Category = ({ categories, }: CategoryProps) => {
    const router = useRouter();
    const [selectedCategory, setSelectedCategory] = useState("");

    const handleSelectCategory = (item: string) => {
        setSelectedCategory(item);
        const queryUrl = item.trim() !== '' ? `?category=${encodeURIComponent(item)}` : '';
        router.replace(`/search${queryUrl}`, { scroll: false });
    }
    return (
        <div className='no-scrollbar flex items-center justify-start overflow-x-scroll gap-2 sm:gap-3 w-full p-2 sm:p-2.5 '>
            <button onClick={() => handleSelectCategory("")} className={`text-gray-900 py-1.5 px-4 z-10 rounded-full ${selectedCategory === "" ? "bg-blue-500 text-white" : "bg-gray-100 border text-small"}`}>All</button>
            {
                categories.map((item) => <button onClick={() => handleSelectCategory(item.title)} className={`whitespace-nowrap py-1.5 px-4 rounded-full z-10 ${item.title === selectedCategory ? "bg-blue-500 text-white" : "bg-gray-100 border text-small "}`} key={item._id}>{item.title}</button>)
            }
        </div>
    )
}

export default Category