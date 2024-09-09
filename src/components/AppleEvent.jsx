import React from 'react'
import { BlueButton } from './BlueButton'

export const AppleEvent = () => {
  return (
    <div className='w-full h-[40rem] bg-black flex flex-col items-center justify-center overflow-hidden relative'>
        <video src="large.mp4" className='w-full relative -top-10 scale-50' autoPlay muted />
        <section className="bottom-10 absolute flex flex-col items-center justify-center">
            <h1 className='text-5xl text-white font-semibold my-2'>Apple Event</h1>
            <h2 className="text-2xl text-white tracking-tighter my-2">Watch online on 9/9 at 10 a.m. PT.</h2>
            <BlueButton content="Learn more" textSize="lg" />
        </section>
    </div>
  )
}
