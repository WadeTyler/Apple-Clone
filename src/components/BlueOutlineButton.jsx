import React from 'react'

export const BlueOutlineButton = ({content, textSize}) => {
  return (
    <button className={`px-5 py-1 border-[1px] border-[#0071e3] text-[#0071e3] bg-none rounded-full font-light ${textSize =! null ? `text-${textSize}` : 'text-sm'} hover:bg-[#0071e3] hover:text-white`}>{content}</button>
  )
}
