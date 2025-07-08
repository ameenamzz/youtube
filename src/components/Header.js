import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBell,
  faUser,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cahceResults } from "../utils/searchSlice";
const Header = () => {
  const dispath = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestionData, setSuggestionData] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestionData(searchCache[searchQuery]);
      } else {
        searchSuggestion();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const searchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    const suggestionArray = json[1];
    // console.log("api ", suggestionArray);
    setSuggestionData(suggestionArray);
    // console.log("resut ",suggestionData );
    dispath(cahceResults(
      {
        [searchQuery]:suggestionArray
      }
    ))
  };

  const toggleMenuBar = () => {
    dispath(toggleMenu());
  };

  return (
    <div className="mx-5 mt-3 flex">
      <div className="flex">
        <img
          onClick={toggleMenuBar}
          className="w-7 h-7 cursor-pointer"
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png"
          alt="sidebar"
        ></img>
        <img
          className="w-24 h-5 mt-1 ml-4"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgag3pr18z1Xc02Z5Y7T0hk0gKczTzcv7DZw&s"
          alt="y-tube logo"
        ></img>
      </div>
      <div className="mx-80">
        <div className=" border rounded-2xl">
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-[500px] border-0 outline-none px-4 rounded-2xl"
            placeholder="Search"
            type="text"
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="bg-slate-50 px-4 py-1 rounded-r-3xl border-l-2">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>

        {showSuggestions && (
          <div className="absolute bg-slate-100 w-[35%] rounded-lg mt-3">
            <ul className="">
              {suggestionData.map((data) => (
                <li className="py-1 hover:bg-slate-200 rounded-lg">
                  <FontAwesomeIcon icon={faMagnifyingGlass} className="mx-2" />
                  {data}
                </li>
              ))}
            </ul>
          </div>
        )}
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
