import { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
  title: "Payment Canceled",
  description: "You have canceled your purchase."
}
const CancelPage = () => {
  return (
      <div className='grid place-items-center'>
          <h1>You have canceled your purchase.</h1>
    </div>
  )
}

export default CancelPage