"use client"
import { Category, Product } from '@/types'
import React, { ChangeEvent, useEffect, useState } from 'react'
import ShowSearchResult from './ShowSearchResult'
import { useRouter, useSearchParams } from 'next/navigation'
import { PRICES, RATINGS, SORTS, urlFromParams } from '@/utils'
import useCart from '@/app/(site)/(store)/store'
import ClearFilter from './ClearFilter'
type SearchResultProps = {
    products: Product[],
    categories: Category[]
}
type FilterProps = {
    category: string,
    price: string,
    rating: string
}
const SearchResult = ({ products, categories }: SearchResultProps) => {
    const { setcurrentAppliedFilters } = useCart((state) => ({
        setcurrentAppliedFilters: state.setcurrentAppliedFilters
    }))
    const router = useRouter();
    const params = useSearchParams();
    const [appliedFilter, setAppliedFilter] = useState<String[]>([]);
    const [sortBy, setSortBy] = useState("");
    const [filter, setFilter] = useState<FilterProps>({
        category: "",
        price: "",
        rating: ""
    });


    const handleCategorySelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setFilter((prev) => ({ ...prev, [e.target.name]: e.target.value }))
        let url = urlFromParams(e.target.name, e.target.value);
        router.push(url, { scroll: false })
    }
    const handleClearFilter = () => {
        setFilter({
            category: "",
            price: "",
            rating: ""
        });
        setAppliedFilter([]);
        const url = new URL(window.location.href);
        url.searchParams.delete("category");
        url.searchParams.delete("price");
        url.searchParams.delete("rating");
        router.push(url.href, { scroll: false });
    }

    const handleSortSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setSortBy(e.target.value);
        let url = urlFromParams('sort', e.target.value);
        router.push(url, { scroll: false })

    }
    useEffect(() => {
        const tempFilters = [];
        for (const key of params.keys()) {
            if (tempFilters.indexOf(key) === -1 && key != 'query' && key !== 'sort') {
                tempFilters.push(key);
            }
        }
        setAppliedFilter(tempFilters);
        setcurrentAppliedFilters(tempFilters);
    }, [params])

    return (
        <main className='p-2 sm:p-4 max-w-[1600px] mx-auto gap-2 sm:gap-4 flex flex-col sm:flex-row min-h-screen h-full mt-12 sm:mt-24'>
            <section className='p-2 z-20 w-full sm:max-w-xs'>
                <div className='sticky top-0 '>
                    <div className="flex flex-col gap-2">
                        <h2>Category</h2>
                        <select name='category' value={filter.category} onChange={handleCategorySelectChange} className='p-2 outline-none'>

                            <option value="">All</option>
                            {
                                categories.map((item) => <option key={item._id} value={item.title}  >{item.title}</option>)
                            }
                        </select>
                        <h1>Price</h1>
                        <select name='price' value={filter.price} onChange={handleCategorySelectChange} className='p-2 outline-none'>

                            <option value="">All</option>
                            {
                                PRICES.map((price, index) => <option key={index} value={price.value} >{price.name}</option>)
                            }
                        </select>
                        <h1>Rating</h1>
                        <select name='rating' value={filter.rating} onChange={handleCategorySelectChange} className='p-2 outline-none'>

                            <option value="">All</option>
                            {
                                RATINGS.map((item) => <option key={item} value={item} >{item} stars & up</option>)
                            }
                        </select>

                    </div>
                </div>
            </section>
            <section className='p-2 w-full sm:hidden'>
                <div className='flex flex-col'>
                    <h1>Sort By: </h1>
                    <select name='sort' value={sortBy} onChange={handleSortSelectChange} className='p-2 outline-none'>
                        <option value="">Featured</option>
                        {
                            SORTS.map((price, index) => <option key={index} value={price.value}>{price.name}</option>)
                        }
                    </select>
                </div>
            </section>
            <section className='flex-1 w-full p-2'>
                <ClearFilter products={products} appliedFilter={appliedFilter} handleClearFilter={handleClearFilter} />
                <ShowSearchResult products={products} />
            </section>
            <section className='p-2 hidden sm:flex'>
                <div className='sticky top-0'>
                    <h1>Sort By: </h1>
                    <select name='sort' value={sortBy} onChange={handleSortSelectChange} className='p-2 outline-none'>
                        <option value="">Featured</option>
                        {
                            SORTS.map((price, index) => <option key={index} value={price.value}>{price.name}</option>)
                        }
                    </select>
                </div>
            </section>
        </main>
    )
}

export default SearchResult