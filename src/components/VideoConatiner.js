import React, { useEffect, useState } from "react";
import { YOUTUBE_API_URL } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const VideoConatiner = () => {
  const [videos, setVideos] = useState([]);
  const dispath = useDispatch();
  const sidebar = useSelector((store) => store.app.isMenuOpen);
  const handleSideBar = () => {
    if (sidebar === true) {
      dispath(toggleMenu());
    }
  };
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API_URL);
    const json = await data.json();
    setVideos(json.items);
  };
  useEffect(() => {
    getVideos();
  }, []);
  if (videos.length === 0) return null;
  return (
    <div className="flex flex-wrap ml-5" >
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoConatiner;
