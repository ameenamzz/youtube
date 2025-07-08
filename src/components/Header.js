import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBell,
  faUser,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
const Header = () => {
  const dispath = useDispatch();
  const toggleMenuBar = () => {
    dispath(toggleMenu());
  };

  return (
    <div className="mx-5 mt-3 flex">
      <div className="flex">
        <img
          onClick={toggleMenuBar}
          className="w-7 h-7 curs"
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png"
          alt="sidebar"
        ></img>
        <img
          className="w-24 h-5 mt-1 ml-4"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          alt="y-tube logo"
        ></img>
      </div>
      <div className="mx-80 border rounded-2xl">
        <input
          className="w-[500px] border-0 outline-none px-4 rounded-2xl"
          placeholder="Search"
          type="text"
        />
        <button className="bg-slate-50 px-4 py-1 rounded-r-3xl border-l-2">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
      <div className="ml-10">
        <button className="mr-6 bg-slate-100 hover:bg-slate-200 px-3 py-2 rounded-2xl text-sm">
          <FontAwesomeIcon className="pr-1" icon={faPlus} />
          Create
        </button>
        <button className="mr-6">
          <FontAwesomeIcon icon={faBell} />
        </button>
        <button>
          <FontAwesomeIcon icon={faUser} />
        </button>
      </div>
    </div>
  );
};

export default Header;
