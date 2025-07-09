import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
const ChatMessage = (props) => {
  const { name, message } = props;
  return (
    <div className="flex mx-2">
      <div className="pt-2">
        <FontAwesomeIcon icon={faUser} />
      </div>
      <div className="pt-2 ">
        <span className="mx-3 text-sm font-medium">{name}</span>
        <span className=" text-sm">{message}</span>
      </div>
    </div>
  );
};

export default ChatMessage;
