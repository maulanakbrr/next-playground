import React from 'react'

interface ITooltip {
  children: React.ReactNode,
  item: React.ReactNode | string
  position: string
}

const Tooltip:React.FC<ITooltip> = ({children, item, position}) => {
  const getPosition = () => {
    switch(position){
      case 'top':
        return '-top-7 left-0'
      case 'bottom':
        return 'top-7 left-0'
      default: 
        return '-top-7 left-0'
    }
  }
  return (
    <div className='group py-2 px-4 border-b relative'>
      {children}
      <span className={`absolute ${getPosition()} w-max rounded bg-gray-900 px-2 py-1 text-sm font-medium text-gray-50 opacity-0 shadow transition-opacity group-hover:opacity-100 hover:opacity-100`}>
        {item}
      </span>
    </div>
  )
}

export default Tooltip