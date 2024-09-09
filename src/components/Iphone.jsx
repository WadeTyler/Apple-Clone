import React from 'react'
import { BlueButton } from './BlueButton'
import { BlueOutlineButton } from './BlueOutlineButton'

export const Iphone = () => {
  return (
    <div className="w-full h-[32rem] relative bg-[url('/hero-iphone-family.jpg')] bg-center flex flex-col items-center p-10">
        <h1 className='text-white text-5xl font-semi-bold text-center my-2'>iPhone</h1>
        <h2 className="text-white text-2xl text-center my-2">Our most powerful cameras <br />Ultrafast chips. And USB-C.</h2>
        <section className="flex flex-row my-2 gap-10">
            <BlueButton content="Learn more" scaleVal="125" />
            <BlueOutlineButton content="Shop iPhone" scaleVal="125" />
        </section>
    </div>
  )
}
