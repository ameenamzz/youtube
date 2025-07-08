import React from 'react'
import Button from './Button'

const BtnList = () => {
  const list=["all","cricket","mufti","udemy","tech","laptop","cricket","mufti","udemy","tech","laptop","tech","laptop",]
  return (
    <div className='flex wra mt-5 mx-10 overflow-x-scroll '>
      {list.map((list,index)=><Button key={index} name={list}/>)}
      
    </div>
  )
}

export default BtnList
