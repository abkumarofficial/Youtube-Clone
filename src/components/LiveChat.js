import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/store";
import { generateName, generateMessage } from "../utils/generator";
import { useState } from "react";

const LiveChat = () => {
  const dispatch = useDispatch();
  const [liveMessage, setLiveMessage] = useState("");

  const chatMessages = useSelector((state) => {
    return state.chat.messages;
  });
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        addMessage({
          name: generateName(),
          message: generateMessage(30),
        })
      );
    }, 1500);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleChange = (e) => {
    setLiveMessage(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addMessage({
        name: "Abhijeet",
        message: liveMessage,
      })
    );
    setLiveMessage("");
  };
  return (
    <>
      <div className="w-full ml-2 h-[600px] p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((chat, index) => {
          return (
            <ChatMessage key={index} name={chat.name} message={chat.message} />
          );
        })}
      </div>
      <form
        className="w-full p-2 ml-2 border border-black flex justify-between"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="px-2 w-96 border border-b-slate-600 shadow-lg"
          value={liveMessage}
          onChange={handleChange}
        />
        <button className="px-2 mx-2 bg-green-100">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
