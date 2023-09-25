import Image from 'next/image'
import Link from 'next/link';
import { AiOutlineUser } from 'react-icons/ai';
import SearchBar from './SearchBar';
import CartIcon from './CartIcon';
import ShowModal from './ShowModal';
import { UserButton, auth } from '@clerk/nextjs';

const Header = () => {
    const { userId } = auth();
    return (
        <header className='bg-white border-b fixed top-0 left-0 w-full z-50'>
            <ShowModal />
            <nav className='flex items-center justify-between max-w-[1600px] mx-auto p-2'>
                <Link href={'/'}>
                    <h1 className='font-syne text-2xl sm:text-4xl font-semibold'>ClickCraze</h1>
                </Link>
                <SearchBar />
                <div className='flex items-center gap-3'>
                    {
                        !userId ? (<Link href={'/signIn'}>
                            <div className='flex items-center gap-2 border-r border-r-gray-300 pr-3 cursor-pointer'>
                                <AiOutlineUser size={25} className='text-blue-500' />
                                <p className='font-base'>Sign Up/Sign in</p>
                            </div>
                        </Link>) : (<>
                            <UserButton />
                        </>)
                    }
                    <div className='flex items-center gap-2 cursor-pointer'>
                        <CartIcon />
                        <p className='font-base'>Cart</p>
                    </div>
                </div>
            </nav>
            
        </header>
    )
}

export default Header