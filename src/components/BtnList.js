import React from 'react'
import Button from './Button'

const BtnList = () => {
  const list=["all","cricket","mufti","udemy","tech","laptop","cricket","mufti","udemy","tech","laptop","cricket","mufti","udemy","tech","laptop",]
  return (
    <div className='flex mt-5'>
      {list.map((list)=><Button name={list}/>)}
      
    </div>
  )
}

export default BtnList
