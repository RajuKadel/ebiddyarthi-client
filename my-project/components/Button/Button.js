// import React from 'react'

const Button = ({ text, isLoading }) => {
  return (
    <div className="mt-1">
      <button type="submit" className={`${isLoading ? 'invisible' : ''}
      w-full
      px-6
      py-2.5
      bg-green-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-green-700 hover:shadow-lg
      focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-green-800 active:shadow-lg
      transition
      duration-150
      ease-in-out`}>{text}</button>
    </div>
  )
}

export default Button