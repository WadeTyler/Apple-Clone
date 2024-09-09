import React from 'react'

export const BlueButton = ({content, textSize}) => {
  return (
    <button className={`px-5 py-1 border-[1px] border-[#0071e3] text-white bg-[#0071e3] rounded-full font-light ${textSize =! null ? `text-${textSize}` : 'text-sm'} hover:bg-[#0077ED] `}>
        {content}
    </button>
  )
}
