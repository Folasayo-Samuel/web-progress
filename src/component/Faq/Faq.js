import React from "react";
import { FaPlus } from "react-icons/fa";
import { FaqData } from "./FaqData";
const Faq = () => {
  return (
    <div className="container faq py-5 ">
      <div className="faq_content">
        <h1 className="Ins d-inline text-white">FAQ</h1>

        <ul className="que">
          {FaqData &&
            FaqData.map((data) => {
              return (
                <li className="">
                  <span>{data.que} </span>
                  <div className="add">
                    <FaPlus />
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default Faq;
