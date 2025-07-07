import React from 'react'

const Button = ({name}) => {
  return (
    <div>
      <button className='mx-2 px-4 bg-slate-100 rounded-md'>{name}</button>
    </div>
  )
}

export default Button
