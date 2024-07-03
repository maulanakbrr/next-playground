import React from 'react'

interface ButtonProps {
    type?: 'button' | 'submit' | 'reset',
    isDisabled: boolean,
    children: React.ReactNode,
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button: React.FC<ButtonProps> = ({type, isDisabled = false, children, onClick}) => {
  const getStyle = () => {
    if(isDisabled) {
      return 'bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed'
    } 
    return 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
  }

  return (
    <button
      type={type}
      disabled={isDisabled}
      className={getStyle()}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button