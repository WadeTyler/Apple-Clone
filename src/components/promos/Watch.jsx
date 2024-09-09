import React from 'react'
import { BlueButton } from '../BlueButton'
import { BlueOutlineButton } from '../BlueOutlineButton'

export const Watch = () => {
  return (
    <div className='relative w-full flex flex-col items-center bg-black aspect-[16/9]'>
        <section className="z-10 mt-6 flex flex-col items-center gap-2 text-white text-center">
            <img src="apple-watch-series-9.png" alt="" />
            <h2 className="text-xl">Smarter. Brighter. Mightier.</h2>
            <section className="flex flex-row gap-4">
                <BlueButton content="Learn more" />
                <BlueOutlineButton content="Buy" />
            </section>
        </section>

        <div className="absolute image-wrapper w-full h-fit bg-[url('/apple-watch.jpg')] bg-cover bg-center aspect-[16/9]"></div>
        
    </div>
  )
}
