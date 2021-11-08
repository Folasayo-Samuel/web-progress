import FormNavbar from '../../../component/formnavbar/FormNavbar';
import React, { useState } from "react";
// import { useState } from "react";

const AccidentRegister = () => {
  
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
    <div className="navcolor">
    <FormNavbar />
    </div> <br />
    <div className="container chang">
      <form onSubmit={handleSubmit} className="bordsha">
        <div className="row">
          <h2 className="text-center pt-3">Place cover on Per<span className="Ins">sonal Ac</span>cident Insurance</h2>

        <div className="col">
        <label htmlFor="Full Name" className="pt-4">
          Full Name <br />
          <input
            type="text"
            name="fullName"
            value={fullName}
            onChange={handleChange}
            placeholder="Enter Your Name"
            className="container-fluid" />
        </label>
        <br />
        <label htmlFor="Phone Number" className="pt-4">
          Phone Number <br />
          <input
            type="tel"
            name="phoneNumber"
            value={phoneNumber}
            onChange={handleChange}
            placeholder="Enter Phone Number"
            className="container-fluid"/>
        </label>
        <br />
        <label htmlFor="Date Of Birth" className="pt-4">
          Date Of Birth <br />
          <input
            type="date"
            value={birthDate}
            name='birthDate'
            onChange={handleChange}
            placeholder="Enter Date Of Birth"
            className="container-fluid"/>
        </label>
        <br />
        <label htmlFor="Email Address" className="pt-4">
          Email Address <br />
          <input
            type="email"
            value={email}
            name='email'
            onChange={handleChange}
            placeholder="Enter Your Email"
            className="container-fluid"/>
        </label>
        </div>

        <div className="col">
        <label htmlFor="Contact Address" className="pt-4">
        Contact Address <br />
          <input
            type="text"
            name="address"
            value={address}
            onChange={handleChange}
            placeholder="Enter Your Address"
            className="container-fluid"/>
        </label>
        <br />
        <label htmlFor="Type &amp; Model of the insured item" className="pt-4">
          Type &amp; Model of the insured form <br />
          <input
            type="text"
            name="itemModel"
            value={itemModel}
            onChange={handleChange}
            placeholder="Enter Your Type &amp; Model"
            className="container-fluid" />
        </label>
        <br />
        <label htmlFor="Value of the insured item" className="pt-4">
          Value of the insured item <br />
          <input
            type="number"
            name="itemValue"
            value={itemValue}
            onChange={handleChange}
            placeholder="Enter Your Value of the insured item"
            className="container-fluid"/>
        </label>
        <br />
        <label htmlFor="IMEI number" className="pt-4">
          IMEI number <br />
          <input
            type="number"
            name="imei"
            value={imei}
            onChange={handleChange}
            placeholdersubmitone="Enter Your IMEI number"
            style = {{width: '100%'}} placeholder="Engter Your IMEI Number" className="container-fluid" />
        </label>
        </div>
        </div>
        <input className="mt-4 mb-4 submitone" type="submit" value="Submit" />
      </form>
    </div>
    </>
  );
};

export default AccidentRegister;
