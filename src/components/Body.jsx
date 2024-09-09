import React from 'react'
import { AppleEvent } from './AppleEvent'
import { BuyMac } from './BuyMac'
import { Iphone } from './iPhone'
import { Promos } from './Promos'
import { AppleTV } from './AppleTV'

export const Body = () => {
  return (
    <div className='w-full h-full flex flex-col relative items-center'>
        <AppleEvent />
        <BuyMac />
        <Iphone />
        <Promos />
        <AppleTV />
    </div>
  )
}
