import React, { useState } from "react";
import Nav from "../../../component/navbar/Navbar";
// import { useState } from "react";

const Register = () => {
  
  const initialDetails = {
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
    birthDate: "",
    imei: "",
    itemValue: "",
    itemModel: "",
  };
  // const 
  const [userDetails, setUserDetails] = useState(initialDetails);
  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  console.log(userDetails);

  };
  const {
    fullName,
    email,
    phoneNumber,
    address,
    birthDate,
    imei,
    itemValue,
    itemModel,
  } = userDetails;
  return (
    <>
    <Nav dark={true} />
      <form onSubmit={handleSubmit}>
        <label htmlFor="Full Name">
          Full Name
          <input
            type="text"
            name="fullName"
            value={fullName}
            onChange={handleChange}
            placeholder="Enter Your Name"
          />
        </label>
        <label htmlFor="Phone Number">
          Phone Number
          <input
            type="tel"
            name="phoneNumber"
            value={phoneNumber}
            onChange={handleChange}
            placeholder="Enter Phone Number"
          />
        </label>
        <label htmlFor="Date Of Birth">
          Date Of Birth
          <input
            type="date"
            value={birthDate}
            name='birthDate'
            onChange={handleChange}
            placeholder="Enter Date Of Birth"
          />
        </label>
        <label htmlFor="Email Address">
          Email Address
          <input
            type="email"
            value={email}
            name='email'
            onChange={handleChange}
            placeholder="Enter Your Email"
          />
        </label>

        <label htmlFor="Contact Address">
          Email Address
          <input
            type="text"
            name="address"
            value={address}
            onChange={handleChange}
            placeholder="Enter Your Address"
          />
        </label>
        <label htmlFor="Type &amp; Model of the insured form">
          Type &amp; Model of the insured form
          <input
            type="text"
            name="itemModel"
            value={itemModel}
            onChange={handleChange}
            placeholder="Enter Your Type &amp; Model"
          />
        </label>
        <label htmlFor="Value of the insured item">
          Value of the insured item
          <input
            type="number"
            name="itemValue"
            value={itemValue}
            onChange={handleChange}
            placeholder="Enter Your Value of the insured item"
          />
        </label>
        <label htmlFor="IMEI number">
          IMEI number
          <input
            type="number"
            name="imei"
            value={imei}
            onChange={handleChange}
            placeholder="Enter Your IMEI number"
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default Register;
