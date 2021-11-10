import FormNavbar from '../../../component/formnavbar/FormNavbar';
import React, { useState } from "react";


const ComprehensiveRegister = () => {
  
  const initialDetails = {
    fullName: "",
    phoneNumber: "",
    email: "",
    picturesofVehicle: "",
    proofofOwnership: "",
    vehicleLicence: "",
    sumInsured: "",
    validmeansofId: "",
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
    phoneNumber,
    email,
    picturesofVehicle,
    proofofOwnership,
    vehicleLicence,
    sumInsured,
    validmeansofId,
  } = userDetails;
  return (
    <>
    <div className="navcolor">
    <FormNavbar />
    </div> <br />
    <div className="container chang">
      <form onSubmit={handleSubmit} className="bordsha">
        <div className="row">
          <h2 className="text-center pt-3">Place cover on Com<span className="Ins">prehensi</span>ve Motor Insurance</h2>

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

        <div className="col">
        <label htmlFor="Picture of the vehicle" className="pt-4">
          Pictures of the vehicle <br />
          
          <div className="d-flex binput-group mb-3">
          <input
            type="file"
            value={picturesofVehicle}
            name='file'
            onChange={handleChange}
            placeholder="Choose file"
            className="container-fluid d-none" id="inputGroupFile02"/>
            <input type="text" placeholder="Choose file" />
            <label className="input-group-text cha" for="inputGroupFile02">Browse</label>
          </div>
        </label>
      </div>
      </div>

        <div className="col">
        <label htmlFor="Proof of ownership" className="pt-4">
        Proof of ownership <br />
          
          <div className="d-flex binput-group mb-3">
          <input
            type="file"
            value={proofofOwnership}
            name='file'
            onChange={handleChange}
            placeholder="Upload Supporting Documents"
            className="container-fluid d-none" id="inputGroupFile02"/>
            <input type="text" placeholder="Vehicle Licence" />
            <label className="input-group-text cha" for="inputGroupFile02">Browse</label>
          </div>
        </label>
        <br />
        
        <label htmlFor="Sum Insured" className="pt-4">
          Sum Insured <br />
          <input
            type="text"
            name="itemModel"
            value={vehicleLicence}
            onChange={handleChange}
            placeholder="Enter Insured Sum"
            className="container-fluid" />
        </label>
        <br />

        <div className="col">
        <label htmlFor="Valid Id" className="pt-4">
        Valid means of ID <br />
          
          <div className="d-flex binput-group mb-3">
          <input
            type="file"
            value={validmeansofId}
            name='file'
            onChange={handleChange}
            placeholder="Valid means of ID"
            className="container-fluid d-none" id="inputGroupFile02"/>
            <input type="text" placeholder="Valid means of ID" />
            <label className="input-group-text cha" for="inputGroupFile02">Browse</label>
          </div>
        </label>
        <br />

        </div>
        </div>
      </div>
        <input className="mt-4 mb-4 submitone" type="submit" value="Submit" />
      </form>
    </div>
    </>
  );
};

export default ComprehensiveRegister;
