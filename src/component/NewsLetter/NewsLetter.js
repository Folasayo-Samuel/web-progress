import React, { useState } from "react";
import Chat from "./Chat";

const NewsLetter = () => {
  const initialData = {
    name: "",
    email: "",
    sms: "",
  };
  const [smsDetails, setSmsDetails] = useState(initialData);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setSmsDetails({ ...smsDetails, [name]: value });
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(smsDetails);
  };

  const { email, sms, name } = smsDetails;

  return (
    <div className="container p-md-5 newsletter ">
      <div className="row">
        <div className="col-12 col-md-6">
          <form action="" className=" news new_shadow">
            <h3>
              {" "}
              <span className="Ins">Drop u</span>s a{" "}
              <span className="colored">line</span>
            </h3>
            <div className="newsText">
              <small className="d-inline-block py-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
                dolorem enim et beatae teariatur labore m
              </small>
            </div>
            <p>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                value={name}
                className="form-control outline new_shadow"
                placeholder="Enter Your Name"
              />
            </p>

            <p>
              <input
                type="email"
                className="form-control outline new_shadow"
                placeholder="Enter Your Email"
                name="name"
                onChange={handleChange}
                value={email}
              />
            </p>

            <p>
              <textarea
                rows="5"
                name="sms"
                onChange={handleChange}
                value={sms}
                className="textarea"
                placeholder="Message"
              ></textarea>
            </p>
            <p>
              <button className="submit_btn">Submit</button>
            </p>
          </form>
        </div>
        <div className="col-12 py-4 col-md-6 relative">
          <div className="container">
            <h1>
              {" "}
              <span className="Ins">News</span>
              <span className="colored">Letter</span>
            </h1>
            <div className="newsText">
              <small>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
                dolorem enim et beatae teariatur labore m
              </small>
            </div>
            <form action="">
              <p className="pt-5">
                <input
                  type="email"
                  className="form-control outline new_shadow"
                  placeholder="Enter Your Email"
                  name="name"
                  onChange={handleChange}
                  value={email}
                />
              </p>
              <p>
                <button className="submit_btn">Subcribe</button>
              </p>
            </form>
          </div>

          <div className="chat_box">
            <Chat />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
