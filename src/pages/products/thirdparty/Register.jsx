import FormNavbar from "../../../component/formnavbar/FormNavbar";
import React, { useState } from "react";
// import { useState } from "react";

const Thirdpartyform = () => {
  const initialDetails = {
    fullName: "",
    phoneNumber: "",
    email: "",
    engineNumber: "",
    chassisNumber: "",
    policyType: "",
    registrationNumber: "",
    vehicleMake: "",
    vehicleModel: "",
    vehicleColor: "",
    yearofMake: "",
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
    engineNumber,
    chassisNumber,
    policyType,
    registrationNumber,
    vehicleMake,
    vehicleModel,
    vehicleColor,
    yearofMake,
  } = userDetails;
  return (
    <>
      <div className="navcolor container ">
        <FormNavbar />
      </div>{" "}
      <br />
      <div className="container chang">
        <form onSubmit={handleSubmit} className="bordsha">
          <div className="row">
            <h2 className="text-center pt-3">
              Place cover on Th<span className="Ins">ird Party</span> Motor
              Insurance
            </h2>

            <div className="col">
              <label htmlFor="Full Name" className="pt-4">
                Full Name <br />
                <input
                  type="text"
                  name="fullName"
                  value={fullName}
                  onChange={handleChange}
                  placeholder="Enter Your Name"
                  className="container-fluid"
                />
              </label>
              <br />

              <label htmlFor="Phone Number" className="pt-4">
                Full Name <br />
                <input
                  type="number"
                  name="phoneNumber"
                  value={phoneNumber}
                  onChange={handleChange}
                  placeholder="Enter Your Phone Number"
                  className="container-fluid"
                />
              </label>
              <br />

              <label htmlFor="Email Address" className="pt-4">
                Email Address <br />
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  placeholder="Enter Your Email"
                  className="container-fluid"
                />
              </label>
              <br />

              <label htmlFor="Engine Number" className="pt-4">
                Engine Number <br />
                <input
                  type="text"
                  name="engineNumber"
                  value={engineNumber}
                  onChange={handleChange}
                  placeholder="Enter Engine Number"
                  className="container-fluid"
                />
              </label>
              <br />

              <label htmlFor="Chassis Number" className="pt-4">
                Chassis Number <br />
                <input
                  type="text"
                  name="chassisNumber"
                  value={chassisNumber}
                  onChange={handleChange}
                  placeholder="Enter Chassis Number"
                  className="container-fluid"
                />
              </label>
              <br />

              <label htmlFor="Policy Type" className="pt-4">
                Policy Type <br />
                <input
                  type="text"
                  name="policyType"
                  value={policyType}
                  onChange={handleChange}
                  placeholder="Policy Type"
                  className="container-fluid"
                />
              </label>
              <br />
            </div>

            <div className="col">
              <label htmlFor="Registration Number" className="pt-4">
                Registration Number <br />
                <input
                  type="text"
                  name="registrationNumber"
                  value={registrationNumber}
                  onChange={handleChange}
                  placeholder="Enter Registration Number"
                  className="container-fluid"
                />
              </label>
              <br />

              <label htmlFor="Vehicle Make" className="pt-4">
                Vehicle Make <br />
                <input
                  type="text"
                  name="vehicleMake"
                  value={vehicleMake}
                  onChange={handleChange}
                  placeholder="Enter Registration Number"
                  className="container-fluid"
                />
              </label>
              <br />

              <label htmlFor="Vehicle Model" className="pt-4">
                Vehicle Model <br />
                <input
                  type="text"
                  name="vehicleModel"
                  value={vehicleModel}
                  onChange={handleChange}
                  placeholder="Enter Registration Number"
                  className="container-fluid"
                />
              </label>
              <br />

              <label htmlFor="Vehicle Color" className="pt-4">
                Vehicle Color <br />
                <input
                  type="text"
                  name="vehicleColor"
                  value={vehicleColor}
                  onChange={handleChange}
                  placeholder="Enter Vehicle Color"
                  className="container-fluid"
                />
              </label>
              <br />

              <label htmlFor="Year of Make" className="pt-4">
                Year of Make <br />
                <input
                  type="text"
                  name="yearofMake"
                  value={yearofMake}
                  onChange={handleChange}
                  placeholder="Enter Year of Make"
                  className="container-fluid"
                />
              </label>
            </div>
          </div>
          <input className="mt-4 mb-4 submitone" type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
};

export default Thirdpartyform;
