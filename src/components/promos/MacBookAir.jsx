import React from 'react'
import { BlueButton } from '../BlueButton'
import { BlueOutlineButton } from '../BlueOutlineButton'

export const MacBookAir = () => {
  return (
    <div className='relative w-full flex flex-col items-center aspect-[16/9]'>
        <section className="z-10 mt-6 flex flex-col items-center gap-2 text-center">
            <h1 className="text-4xl font-bold">MacBook Air</h1>
            <h2 className="text-xl">Lean. Mean. M3 machine.</h2>
            <section className="flex flex-row gap-4">
                <BlueButton content="Learn more" />
                <BlueOutlineButton content="Buy" />
            </section>
        </section>

        <div className="absolute inset-0 z-0 image-wrapper w-full h-fit bg-[url('/macbook.jpg')] bg-cover bg-center aspect-[16/9]"></div>
    </div>
  )
}
