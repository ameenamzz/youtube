import React from "react";
import { useSelector } from "react-redux";

const SideBar = () => {
const toggleMenu = useSelector((store) => store.app.isMenuOpen);
  console.log(toggleMenu);
  
  if(!toggleMenu) return null

  return (
    <div className="w-48 p-5 shadow-lg">
      <h1 className="font-semibold text-md py-3">Subscriptions</h1>
      <ul>
        <li>Mufti</li>
        <li>Eman</li>
        <li>Roots Academy</li>
        <li>Muslim Mastery</li>
      </ul>
      <h1 className="font-semibold text-md py-3">Explore</h1>
      <ul>
        <li>Sports</li>
        <li>Education</li>
        <li>News</li>
        <li>Podcast</li>
      </ul>
    </div>
  );
};

export default SideBar;
