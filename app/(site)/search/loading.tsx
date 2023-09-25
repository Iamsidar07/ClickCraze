const loading = () => {
    return (
        <main className='p-2 sm:p-4 max-w-[1600px] mx-auto gap-2 sm:gap-4 flex flex-col sm:flex-row min-h-screen h-full mt-12 sm:mt-24'>
            <section className='p-2 z-20 w-full flex flex-col gap-2 sm:w-72 sm:max-w-xs'>
                <div className="w-full h-12 bg-zinc-200 animate-pulse"></div>
                <div className="w-full h-12 bg-zinc-200 animate-pulse"></div>
                <div className="w-full h-12 bg-zinc-200 animate-pulse"></div>
            </section>
            <section className='p-2 w-full sm:hidden'>

            </section>
            <section className='flex-1 w-full p-2'>
                <div className="flex items-center gap-2">
                    {Array(3).fill(0).map((_, index) => <div key={index} className="w-full h-96 max-w-lg bg-zinc-200 animate-pulse rounded-2xl">

                    </div>)}
                </div>
            </section>
            <section className='p-2 hidden sm:flex sm:w-72 flex-col gap-2 h-48'>
                <div className="w-full h-12 bg-zinc-200 animate-pulse"></div>
                <div className="w-full h-12 bg-zinc-200 animate-pulse"></div>
                <div className="w-full h-12 bg-zinc-200 animate-pulse"></div>
            </section>
        </main>
    )
}

export default loading