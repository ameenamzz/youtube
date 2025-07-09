import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomMessage, generateRandomName } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const [sendMessage, setSendMessage] = useState();
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      console.log("API POLLING");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(),
        })
      );
    }, 900);

    return () => {
      clearInterval(i);
    };
  }, []);

  return (
    <div>
      LiveChat
      <div className="p-2 border w-[320px] h-[600px] overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((c, index) => (
          <ChatMessage key={index} name={c.name} message={c.message} />
        ))}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Ameen",
              message: sendMessage,
            })
          );
          setSendMessage("");
        }}
      >
        <input
          className="border"
          placeholder="send  meassage"
          value={sendMessage}
          onChange={(e) => setSendMessage(e.target.value)}
        />
        <button>Send</button>
      </form>
    </div>
  );
};

export default LiveChat;
