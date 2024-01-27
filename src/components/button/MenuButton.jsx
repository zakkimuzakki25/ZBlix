// eslint-disable-next-line no-unused-vars
import React from 'react'

// eslint-disable-next-line react/prop-types
const MenuButton = ({handle, isOpen}) => {
  return (
    <button onClick={handle} className={`${isOpen ? '' : ''} lg:w-10 lg:h-10 flex flex-col justify-center gap-1.5 group`}>
        <div className={`${isOpen ? 'transition-all rotate-45 relative top-1.5' : 'rounded-full'} lg:w-8 lg:h-0.75 bg-white-1 mx-auto group-hover:bg-red`}/>

        <div className={`${isOpen ? 'transition-all opacity-0' : 'rounded-full'} lg:w-8 lg:h-0.75 bg-white-1 mx-auto group-hover:bg-red`}/>

        <div className={`${isOpen ? 'transition-all -rotate-45 relative bottom-1.5' : 'rounded-full'} lg:w-8 lg:h-0.75 bg-white-1 mx-auto group-hover:bg-red`}/>
    </button>
  )
}

export default MenuButton