import React from 'react'
import { BlueOutlineButton } from './BlueOutlineButton'

export const BuyMac = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-white py-20 w-1/2 relative'>

        <div className="bubble-1 relative">
          <img src="bubble-one.svg" alt="" className='-rotate-6'/>
          <img src="mac-sticker.png" alt="" className="absolute -top-[20px] -right-[50px]" />
          <img src="heart-logo.png" alt="" className="absolute -top-[19px] -left-[60px]" />
          <img src="iphones-sticker.png" alt="" className="absolute bottom-[-126px] left-[-100px]" />

        </div>
        
        <img src="bubble-three.svg" alt="" className='scale-[65%]' />

        <div className="bubble-3 relative">
          <img src="bubble-two.svg" alt="" className='rotate-6' />
          <img src="ipad-sticker.png" alt="" className="absolute top-[-20px] right-[-60px]" />
        </div>

        <img src="bubble-four.svg" alt="" className='scale-[65%]' />

        <BlueOutlineButton content="Shop" textSize="lg" />
        
    </div>
  )
}
