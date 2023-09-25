import Link from 'next/link'
import { AiOutlinePhone, AiOutlineWhatsApp } from 'react-icons/ai'

const Footer = () => {
    return (
        <footer className='bg-blue-500 text-white z-10'>
            <div className='flex flex-col sm:flex-row items-center justify-center sm:items-start sm:justify-evenly gap-4 p-4 sm:p-12'>
                <div className='flex flex-col gap-2 '>
                    <Link href={'/'}>
                        <h1 className='font-syne text-2xl sm:text-4xl font-semibold'>ClickCraze</h1>
                    </Link>
                    <div className='mt-4 flex flex-col gap-2'>
                        <h2 className='font-bold'>Contact</h2>
                        <div className='flex items-start gap-2'>
                            <AiOutlineWhatsApp size={25} className='text-white' />
                            <div>
                                <p>Whats App</p>
                                <p>+1 202-340-8903</p>
                            </div>
                        </div>
                        <div className='flex items-start gap-2'>
                            <AiOutlinePhone size={25} className='text-white rotate-90' />
                            <div>
                                <p>Call Us</p>
                                <p>+1 202-340-8903</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <h2 className='border-b border-white text-base pb-2 mb-4'>Most Popular Categories</h2>
                    {Array(7).fill(0).map((_, i) => <li key={i} className='text-sm text-center sm:text-left'>Staples</li>)}
                </div>
                <div className='flex flex-col gap-2'>
                    <h2 className='border-b border-white text-base pb-2 mb-4'>Customer Service</h2>
                    {Array(5).fill(0).map((_, i) => <li key={i} className='text-sm text-center sm:text-left'>About Us</li>)}
                </div>
            </div>
        </footer>
    )
}

export default Footer