import React from 'react'
import { BlueButton } from '../BlueButton'
import { BlueOutlineButton } from '../BlueOutlineButton'

export const Ai = () => {
  return (
    <div className='relative w-full flex flex-col items-center aspect-[16/9]'>
        <section className="z-10 mt-6 flex flex-col items-center gap-2 text-center">
            <h1 className="text-4xl font-bold">Apple Intelligence</h1>
            <h2 className="text-xl">AI for the rest of us.</h2>
            <h2 className="text-lg text-gray-500">Coming in beta this fall</h2>
            <section className="flex flex-row gap-4">
                <BlueButton content="Learn more" />
                <BlueOutlineButton content="Watch the film" />
            </section>
        </section>

        <div className="absolute image-wrapper w-full h-fit bg-[url('/apple-intelligence.jpg')] bg-cover bg-center aspect-[16/9]"></div>
        
    </div>
  )
}
