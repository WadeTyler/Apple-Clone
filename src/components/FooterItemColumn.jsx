import React from 'react'

export const FooterItemColumn = ({section}) => {
  return (
    <div className='flex flex-col'>
        {section.map((section, index) => (
            <div className="flex flex-col" key={index}>
                <h2 className="font-semibold text-xs mb-2">{section.title}</h2>
                <ul className="space-y-2 mb-4">
                    {section.items.map((item, i) => (
                        <li key={i} className='text-xs text-gray-700 hover:text-gray-900 cursor-pointer'>{item}</li>
                    ))}
                </ul>
            </div>

        ))}
    </div>
  )
}

