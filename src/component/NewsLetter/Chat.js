import React from 'react'
import { FaRegTimesCircle, FaTelegramPlane } from 'react-icons/fa'
import User from "../../assest/images/Eight.png";

const Chat = () => {
    return (
        <>
            <div className="livechat">
            <h4 className="text-center text-bold ">
              Live<span className="colored">Chat </span>{" "}
            </h4>
            <span className="close">
              <FaRegTimesCircle />
            </span>
            <p className="chat mt-4">
              <div className="user_img mr-3">
                <img src={User} alt="" />
              </div>
              <div className="text"> Hi</div>
            </p>

            <span className="chatform mt-5 ">
              <input type="text" placeholder="Type a Message here..." />
              <span>
                <FaTelegramPlane />
              </span>
            </span>
          </div>
        </>
    )
}

export default Chat
