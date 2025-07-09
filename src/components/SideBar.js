import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const SideBar = () => {
  const toggleMenu = useSelector((store) => store.app.isMenuOpen);
  const location = useLocation();

  if (!toggleMenu) return null;
  // if (location.pathname === "/watch") return false
  return (
    <div className="w-48 p-5 shadow-lg">
      <Link to={"/"}>
        <h1 className="font-semibold text-md py-3 cursor-pointer">Home</h1>
      </Link>
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
