const loading = () => {
  return (
    <main className="flex flex-col gap-2 max-w-[1440px] mx-auto mt-[90px]">
      <section className="flex items-center gap-2">
        <div className="w-44 h-12 rounded-full bg-zinc-200 animate-pulse"></div>
        <div className="w-44 h-12 rounded-full bg-zinc-200 animate-pulse"></div>
        <div className="w-44 h-12 rounded-full bg-zinc-200 animate-pulse"></div>
        <div className="w-44 h-12 rounded-full bg-zinc-200 animate-pulse"></div>
      </section>

      <section className="w-full h-96 bg-zinc-200 animate-pulse rounded-2xl">
      </section>
      <section className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="w-48 h-6 bg-zinc-200 animate-pulse"></div>
          <div className="w-24 h-6 bg-zinc-200 animate-pulse"></div>
        </div>
        <div className="flex items-center gap-2">
          {Array(3).fill(0).map((_, index) => <div key={index} className="w-full h-96 max-w-lg bg-zinc-200 animate-pulse rounded-2xl">

          </div>)}
        </div>
      </section>
      <section className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="w-48 h-6 bg-zinc-200 animate-pulse"></div>
          <div className="w-24 h-6 bg-zinc-200 animate-pulse"></div>
        </div>
        <div className="flex items-center gap-2">
          {Array(3).fill(0).map((_, index) => <div key={index} className="w-full h-96 max-w-lg bg-zinc-200 animate-pulse rounded-2xl">

          </div>)}
        </div>
      </section>
    </main>
  )
}

export default loading