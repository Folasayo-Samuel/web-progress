import React, { useEffect, useState } from "react";
import { FaRegTimesCircle, FaTelegramPlane } from "react-icons/fa";
import User from "../../assest/images/Eight.png";

const Chat = () => {
  const [chat, setChat] = useState([]);
  const [userInput, setUserInput] = useState("");
  const handleChange = (e) => {
    setUserInput(e.target.value);
    console.log(userInput);
  };
  const handleChat = (e) => {
    e.preventDefault();
    if (!userInput) {
      return null;
    } else {
      //  useEffect(() => {
      setChat([...chat, { id: new Date(), sms: userInput  }])
      //  }, [])
      setUserInput("");
    }
    console.log(chat);
  };

  return (
    <>
      <div className="livechat">
        <h4 className="text-center text-bold ">
          Live<span className="colored">Chat </span>{" "}
        </h4>
        <span className="close">
          <FaRegTimesCircle />
        </span>
        
         <div className="chat mt-4">
                <div className="user_img mr-3">
                  <img src={User} alt="" />
                </div>
                <div className="text"> Hi</div>
              </div>
        
        {chat &&
          chat.map((message) => {
            return (
              <div className="chat-right mt-4" key={message.id} >
                <div className="text"> {message.sms} </div>
                <div className="user_img mr-3">
                  <img src={User} alt="" />
                </div>
              </div>
            );
          })}

        <span className="chatform mt-5 ">
          <input
            type="text"
            placeholder="Type a Message here..."
            onChange={handleChange}
            value={userInput}
          />
          <span onClick={handleChat} style={{cursor: "pointer"}} >
            <FaTelegramPlane />
          </span>
        </span>
      </div>
    </>
  );
};

export default Chat;
