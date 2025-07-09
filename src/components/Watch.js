import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
const Watch = () => {
  const dispath = useDispatch();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    dispath(closeMenu());
  }, []);

  return (
    <div className="mt-5">
      <div className="flex">
        <div className="px-5">
          <iframe
            width="1200"
            height="600"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"

          ></iframe>
        </div>
        <div>
          <LiveChat />
        </div>
      </div>
      <div className="m-5">
        <CommentsContainer />
      </div>
    </div>
  );
};

export default Watch;
