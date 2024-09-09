import React from 'react'
import { BlueButton } from '../BlueButton'
import { BlueOutlineButton } from '../BlueOutlineButton'

export const IpadPro = () => {
  return (
    <div className='relative w-full flex flex-col items-center bg-black aspect-[16/9]'>
        <section className="z-10 mt-6 flex flex-col items-center gap-2 text-white text-center">
            <h1 className="text-4xl font-bold">iPad Pro</h1>
            <h2 className="text-xl">Unbelievably thin. Incredibly powerful.</h2>
            <section className="flex flex-row gap-4">
                <BlueButton content="Learn more" />
                <BlueOutlineButton content="Buy" />
            </section>
        </section>

        <div className="absolute image-wrapper w-full h-fit bg-[url('/ipad-pro.jpg')] bg-cover bg-center aspect-[16/9]"></div>
        
    </div>
  )
}
