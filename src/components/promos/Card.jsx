import React from 'react'
import { BlueButton } from '../BlueButton'
import { BlueOutlineButton } from '../BlueOutlineButton'

export const Card = () => {
  return (
    <div className='relative w-full flex flex-col items-center aspect-[16/9]'>
        <section className="z-10 mt-6 flex flex-col items-center gap-2 text-center">
            <img src="/apple-card-logo.png" alt="" />
            <h2 className="text-xl">Get up to 3% Daily Cash back <br />with every purchase.</h2>
            <section className="flex flex-row gap-4">
                <BlueButton content="Learn more" />
                <BlueOutlineButton content="Apply now" />
            </section>
        </section>

        <div className="absolute inset-0 z-0 image-wrapper w-full h-fit bg-[url('/apple-card.jpg')] bg-cover bg-center aspect-[16/9]"></div>
    </div>
  )
}
