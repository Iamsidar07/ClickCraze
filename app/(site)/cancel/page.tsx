import { Metadata } from 'next'
export const metadata: Metadata = {
  title: "Payment Canceled",
  description: "You have canceled your purchase."
}
const CancelPage = () => {
  return (
    <main className='grid place-items-center'>
      <h1>You have canceled your purchase.</h1>
    </main>
  )
}

export default CancelPage