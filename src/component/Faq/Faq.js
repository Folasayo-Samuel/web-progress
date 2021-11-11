import React from "react";
import { FaPlus } from "react-icons/fa";
import { FaqData } from "./FaqData";
import Accordion from "react-bootstrap/Accordion";
const Faq = () => {
  return (
    <div className="container faq py-5 ">
      <div className="faq_content">
        <h1 className="Ins d-inline text-white">FAQ</h1>

        <ul className="que">
          {FaqData &&
            FaqData.map((data,index) => {
              return (
                <li className=""  key={index} >
                  <span>{data.que} </span>
                  <div className="add">
                    <FaPlus />
                  </div>
                </li>
              );
            })}
        </ul>

        {/* <Accordion >
          <Accordion.Item eventKey="0">
            <Accordion.Header>Accordion Item #1 </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion> */}
      </div>
    </div>
  );
};

export default Faq;
