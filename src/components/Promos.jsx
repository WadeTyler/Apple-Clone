import React from 'react'
import { MacBookAir } from './promos/MacBookAir'
import { IpadPro } from './promos/IpadPro'
import { Ai } from './promos/Ai'
import { Watch } from './promos/Watch'
import { Card } from './promos/Card'
import { TradeIn } from './promos/TradeIn'

export const Promos = () => {
  return (
    <div className='w-full bg-white grid grid-cols-1 lg:grid-cols-2 gap-2 lg:p-2 py-2 relative'>
        
        <MacBookAir />
        <IpadPro />
        <Ai />
        <Watch />
        <Card />
        <TradeIn />

    </div>
  )
}
