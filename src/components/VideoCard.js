import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { title, thumbnails, channelTitle } = snippet;
  const { viewCount, likeCount } = statistics;
   const formatViews = (num) => {
    if (!num) return "0";
    const views = parseInt(num);
    if (views >= 1_000_000) {
      return (views / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
    } else if (views >= 1_000) {
      return (views / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
    }
    return views.toString();
  };
  return (
    <div className="mt-5 w-80 mx-4">
      <img className="rounded-lg" src={thumbnails.medium.url}></img>
      <ul className="mt-2"> 
        <p className="font-medium text-md ">{title}</p>
        <li>{channelTitle}</li>
        <li>{formatViews(viewCount)} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
