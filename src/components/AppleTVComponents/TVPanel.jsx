import React from 'react'

export const TVPanel = ({buttonText, genre, desc, bgImage}) => {
  return (
    <div 
        className={`relative flex flex-col w-[689px] h-[418px] bg-cover bg-center mx-2 hover:cursor-pointer`}
        style={{backgroundImage: `url(${bgImage})`}}
    >
        <section className="info-bottom flex absolute bottom-[32px] left-[30px] gap-4 items-center">
            <button className="bg-white px-4 py-2 rounded-full">{buttonText}</button>

            <p className="text-white font-light">
                <span className="font-bold">{genre}</span>
                <span className="font-extrabold"> · </span>
                {desc}
            </p>
        </section>
    </div>
  )
}
