import React from 'react'

interface ButtonProps {
    type: string,
    isDisabled: boolean,
    children: React.ReactNode,
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button: React.FC<ButtonProps> = ({type, isDisabled = false, children, onClick}) => {
  return (
    <button
        disabled={isDisabled}
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        onClick={onClick}
    >
        {children}
    </button>
  )
}

export default Button