const loading = () => {
    return (
        <main className='grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 mt-12 sm:mt-24 min-h-screen'>
            <section className='relative  w-full h-72 sm:h-[570px] max-w-xl mx-auto bg-zinc-200 animate-pulse'>
            </section>
            <section className='flex flex-col gap-2 p-4'>
                <div className="w-full h-6 bg-zinc-200 animate-pulse"></div>
                <div className="w-44 h-6 bg-zinc-200 animate-pulse rounded-full"></div>
                <div className="w-36 h-6 bg-zinc-200 animate-pulse"></div>
                <div className="w-52 h-6 bg-zinc-200 animate-pulse"></div>
                <div className='flex items-center gap-2 mb-12'>
                    <div className="w-48 h-6 bg-zinc-200 animate-pulse"></div>
                    <div className="w-48 h-6 bg-zinc-200 animate-pulse"></div>
                </div>
                <div className="flex items-center gap-4">
                    <div className=' rounded-sm px-4 py-7 duration-20 w-full sm:max-w-sm bg-zinc-200 animate-pulse'></div>
                    <div className=' rounded-sm px-4 py-7 duration-20 w-full sm:max-w-sm bg-zinc-200 animate-pulse'></div>
                </div>
                <div className='mt-12 flex flex-col gap-2'>
                    <div className="w-full h-6 bg-zinc-200 animate-pulse my-4"></div>
                    <div className="w-96 h-6 bg-zinc-200 animate-pulse"></div>
                    <div className="w-72 h-6 bg-zinc-200 animate-pulse"></div>
                    <div className="w-48 h-6 bg-zinc-200 animate-pulse"></div>
                    <div className="w-96 h-6 bg-zinc-200 animate-pulse"></div>
                    <div className="w-72 h-6 bg-zinc-200 animate-pulse"></div>
                    <div className="w-48 h-6 bg-zinc-200 animate-pulse"></div>
                </div>
            </section>
        </main>
    )
}

export default loading