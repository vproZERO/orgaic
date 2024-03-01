import React from 'react'
import clsx from 'clsx'

const Button = ({children , variant , onClick , type , icon:Icon}) => {
  return (
    <button onClick={onClick} type={type} className={clsx("btn flex items-center py-[28px] gap-[10px] font-bold text-xl px-[39px] rounded-[16px] justify-center" , {
        "text-white bg-arapawa" : variant === "primary",
        "text-arapawa bg-yellow" : variant === "secondary",
        "text-arapawa bg-white border-2 border-arapawa" : variant === "tertiary",
    })}>
      <span className='text-center'>{children}</span>
      {Icon ? Icon : ''}
    </button>
  )
}

export default Button
