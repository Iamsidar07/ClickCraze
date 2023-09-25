"use client"
import { useRouter } from 'next/navigation';
import React, { FormEvent, useState } from 'react'
import { MdOutlineClear } from 'react-icons/md';
import { CiSearch } from "react-icons/ci";
function SearchBar() {
    const router = useRouter();
    const [searchVal, setSearchVal] = useState('');
    const [showSearch, setShowSearch] = useState(false);

    const handleSearch = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const queryUrl = searchVal.trim() !== '' ? `?query=${encodeURIComponent(searchVal)}` : '';
        setSearchVal("");
        setShowSearch(false);
        router.replace(`/search${queryUrl}`, { scroll: false });
    }
    const handleClick = () => {
        setShowSearch(!showSearch);
    }
    return (
        <div className='w-full lg:max-w-xl'>
            <CiSearch size={25} onClick={handleClick} className="cursor-pointer block sm:hidden ml-auto mr-2 " />
            {
                showSearch && <div className='fixed inset-0 w-full pt-12 bg-black/60 flex flex-col duration-200'>
                    <form onSubmit={handleSearch} className='rounded flex border focus-within:border-blue-500  focus-within:shadow-[7px_7px] focus-within::shadow-blue-500 focus-within:rounded-2xl duration-200 max-w-full mx-auto bg-white'>
                        <input value={searchVal} onChange={(e) => setSearchVal(e.target.value)} type='text' className='flex-1 border-none py-2.5 pl-4 pr-3 text-sm outline-none rounded-l-2xl duration-200' placeholder='Search essentials,groceries and more...' />
                        <MdOutlineClear size={25} className={`text-blue-500 cursor-pointer my-auto opacity-0 transition-opacity duration-200 ${searchVal && "opacity-100"}`} onClick={() => setSearchVal("")} />
                        <button type='submit' className='border-l focus-within:border-l-blue-500 font-medium px-3 py-3.5 duration-200 '>Search</button>
                    </form>
                    <div className='flex-1' onClick={() => setShowSearch(false)}>a</div>
                </div>
            }

            <form onSubmit={handleSearch} className='rounded lg:flex-1 items-stretch border focus-within:border-blue-500  focus-within:shadow-[7px_7px] focus-within::shadow-blue-500 focus-within:rounded-2xl duration-200 w-full hidden md:flex'>
                <input value={searchVal} onChange={(e) => setSearchVal(e.target.value)} type='text' className='flex-1 border-none py-2.5 pl-4 pr-3 text-sm outline-none rounded-l-2xl duration-200' placeholder='Search essentials,groceries and more...' />
                {
                    searchVal && <MdOutlineClear size={25} className='text-blue-500 cursor-pointer my-auto' onClick={() => setSearchVal("")} />
                }
                <button type='submit' className='border-l focus-within:border-l-blue-500 font-medium px-3 py-3.5 duration-200 '>Search</button>
            </form>
        </div>
    )
}

export default SearchBar