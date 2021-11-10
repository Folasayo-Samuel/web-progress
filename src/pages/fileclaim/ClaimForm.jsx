import React, { useState } from "react";


const ClaimForm = () => {
  
  const initialDetails = {
    uploadClaimForm: "",
    selectCategory: "",
    receiptOfInsuredItem: "",
    policeReport: "",
    estimateOfGadgetRepairs: "",
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
    uploadClaimForm,
    selectCategory,
    receiptOfInsuredItem,
    policeReport,
    estimateOfGadgetRepairs,
  } = userDetails;
  return (
    <>
    <div className="container chang">
      <form onSubmit={handleSubmit} className="bordsha">
        <div className="row">
          <h2 className="text-center pt-3"> Re<span className="Ins">port A Cla</span>im</h2>
        
        <div className="col">
        <label htmlFor="Upload claim form" className="pt-4">
          Upload claim form <br />         
          <div className="d-flex binput-group mb-3">
          <input
            type="file"
            value={uploadClaimForm}
            name='file'
            onChange={handleChange}
            placeholder="Upload Claim Form"
            className="container-fluid d-none" id="inputGroupFile02"/>
            <input type="text" placeholder="Upload Claim Form" className="container-fluid"/>
            <label className="input-group-text cha" for="inputGroupFile02">Browse</label>
          </div>
        </label>
      </div>

      <div className="">
          <label htmlFor="selectCategory">Select category <br />
          <select name="Select category" id="selectCategory" className="container-fluid">
              <option value="selectCategory">Gadget</option>
              <option value="selectCategory">Comprehensive Insurance</option>
              <option value="selectCategory">Third Party Insurance</option>
              <option value="selectCategory">Motor Insurance </option>
          </select>
          </label>
      </div>

      <label htmlFor="Receipt of insured item" className="pt-4">
          Receipt of insured item <br />         
          <div className="d-flex binput-group mb-3">
          <input
            type="file"
            value={receiptOfInsuredItem}
            name='file'
            onChange={handleChange}
            placeholder="Enter Your Name"
            className="container-fluid d-none" id="inputGroupFile02"/>
            <input type="text" placeholder="Enter Your Name" className="container-fluid"/>
            <label className="input-group-text cha" for="inputGroupFile02">Browse</label>
          </div>
        </label>

        <label htmlFor="Police report" className="pt-4">
          Police report <br />
          <input
            type="text"
            name="policeReport"
            value={policeReport}
            onChange={handleChange}
            placeholder="Enter Your Name"
            className="container-fluid" />
        </label>

        <label htmlFor="Estimate of gadget repairs" className="pt-4">
        Estimate of gadget repairs <br />
          <input
            type="number"
            name="estimateOfGadgetRepairs"
            value={estimateOfGadgetRepairs}
            onChange={handleChange}
            placeholder="Enter amount"
            className="container-fluid" />
        </label>
      </div>
        <input className="mt-4 mb-4 submitone" type="submit" value="Submit" />
      </form>
    </div>
    </>
  )
}

export default ClaimForm;