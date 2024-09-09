import React from 'react'
import { BlueButton } from '../BlueButton'
import { BlueOutlineButton } from '../BlueOutlineButton'

export const TradeIn = () => {
  return (
    <div className='relative w-full flex flex-col items-center aspect-[16/9]'>
        <section className="z-10 mt-6 flex flex-col items-center gap-2 text-center">
            <img src="/trade-in-logo.png" alt="" />
            <h2 className="text-xl">Get $170-$620 in credit when you <br />trade in iPhone 11 or higher.</h2>
            <section className="flex flex-row gap-4">
                <BlueButton content="Get your estimate" />
            </section>
        </section>

        <div className="absolute inset-0 z-0 image-wrapper w-full h-fit bg-[url('/trade-in.jpg')] bg-cover bg-center aspect-[16/9]"></div>
    </div>
  )
}
