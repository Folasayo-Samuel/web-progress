import React, { useState } from "react";

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

  const { email, sms, name } = smsDetails;

  return (
    <div className="container-fluid p-5 newsletter ">
      <div className="row">
        <div className="col-12 col-md-6">
          <form action="" className=" news new_shadow">
            <h3>
              {" "}
              <span className="Ins">Drop u</span>s a{" "}
              <span className="">line</span>
            </h3>
            <div className="newsText">
              <small className="d-inline-block py-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
                dolorem enim et beatae temporibus sed maxime pariatur labore
                modi ratione asperiores praesentium recusandae, fugit assumenda
                quis deleniti soluta veniam animi!
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
                type="text"
                className="form-control outline new_shadow"
                placeholder="Enter Your Name"
                name="name"
                onChange={handleChange}
                value={name}
              />
            </p>
            <p>
              <input
                type="email"
                className="form-control outline new_shadow"
                placeholder="Enter Your Name"
                name="name"
                onChange={handleChange}
                value={email}
              />
            </p>

            <p>
              <textarea name="sms" cols="30" rows="10"></textarea>
            </p>
          </form>
        </div>
        <div className="col-12 col-md-6"></div>
      </div>
    </div>
  );
};

export default NewsLetter;
