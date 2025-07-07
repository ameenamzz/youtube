import React from 'react'
import SideBar from './SideBar'
import MainContainer from './MainContainer'
import { useSelector } from 'react-redux';

const Body = () => {
    const toggleMenu = useSelector((store) => store.app.isMenuOpen);
  console.log(toggleMenu);
  return (
    <div className='flex'>
      
      <SideBar/>
      <MainContainer/>
    </div>
  )
}

export default Body
