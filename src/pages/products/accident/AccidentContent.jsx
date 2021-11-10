import AccidentNav from "../../../component/AccidentNav/AccidentNav";
import ThirteenPics from "../../../assest/images/Thirteen.png";
import { BrowserRouter, Link } from "react-router-dom";
import Button from "../../../component/Button/Button";
import { FaShieldAlt } from "react-icons/fa";
import {AiOutlineCheckCircle, AiOutlineLine } from "react-icons/ai";
import AcExclusions from "./AcExclusions";
import AccidentClaim from "./AccidentClaim";
import Subfooter from "../../../component/sub-footer/Subfooter";
import PreBreakdown from "./PreBreakdown";

const AccidentContent = () => {
    return (
        <div className="container" style={{ position: "relative" }}>
      <AccidentNav />
      <div className="row" style={{ positiion: "relative" }}>
        <div className="col-6" style={{ marginTop: "200px" }}>
          <h2>
              PERSONAL ACCIDENT{" "}
            <span className="Ins"> INSURA</span>NCE
          </h2>
            <p>This policy pays compensation in the event of injuries, disability or death caused soley by external and visible events to the policyholder.</p>
          <br />
          <BrowserRouter>
            <form className="">
              <Link to="/accidentinsform" className="">
                <Button className="loginthree">Get Started</Button>
              </Link>
            </form>
          </BrowserRouter>
        </div>
        <div className="col-6 hide-md-lg">
          <div
            className="bg-white text-dark"
            style={{
              width: "50px",
              height: "40px",
              position: "absolute",
              top: "0",
              left: "1",
              right: "1",
              bottom: "1",
              zIndex: "99",
              marginTop: "230px",
              marginLeft: "-25px",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* <FontAwesomeIcon icon={['fas', 'shield-alt']} 
                    mask={['fas', 'circle']} style={{width:'90px'}} /> */}
            <FaShieldAlt />
          </div>

          <div className="col-sm">
            <img
              src={ ThirteenPics }
              alt="Vehicles"/>
          </div>
        </div>

        <div className="scope pt-4">
          <h3 className="text-center">
            Scope of{" "}
            <span className="co">
              Cover
              {/* <FontAwesomeIcon icon={["fas", "grip-lines"]} /> */}
              <AiOutlineLine />
            </span>
          </h3>
        </div>
        <div className="row text-center">
          <div className="col">
            {/* <FontAwesomeIcon icon={["far", "fa-check-circle"]} /> */}
            <AiOutlineCheckCircle />
            <p>Death</p>
          </div>
          <div className="col">
            {/* <FontAwesomeIcon icon={["far", "fa-check-circle"]} fixedWidth /> */}
            <AiOutlineCheckCircle />
            <p>Permanent Disability</p>
          </div>
          <div className="col">
            {/* <FontAwesomeIcon icon={["far", "fa-check-circle"]} fixedWidth /> */}
            <AiOutlineCheckCircle /> 
            <p>Medical Expenses</p>
          </div>
          <div className="col">
            {/* <FontAwesomeIcon icon={["far", "fa-check-circle"]} fixedWidth /> */}
            <AiOutlineCheckCircle /> 
            <p>Funeral Expenses</p>
          </div>
        </div>
        <div className="row text-center">
          <div className="col">
            {/* <FontAwesomeIcon icon={["far", "fa-check-circle"]} /> */}
            <AiOutlineCheckCircle />
            <p>Covers any form of accident</p>
          </div>
          <div className="col">
            {/* <FontAwesomeIcon icon={["far", "fa-check-circle"]} fixedWidth /> */}
            <AiOutlineCheckCircle />
            <p>Covers strike, riot and civil commotion</p>
          </div>
          <div className="col">
            {/* <FontAwesomeIcon icon={["far", "fa-check-circle"]} fixedWidth /> */}
            <AiOutlineCheckCircle /> 
            <p>Dog bite, wild animal attack</p>
          </div>
          <div className="col">
            {/* <FontAwesomeIcon icon={["far", "fa-check-circle"]} fixedWidth /> */}
            <AiOutlineCheckCircle /> 
            <p>Motorcycling (whilst as rider or passenger)</p>
          </div>
        </div>

        <div className="row Styling">
          <div className="col d-block">
            {/* <FontAwesomeIcon icon={["far", "fa-check-circle"]} /> */}
            <AiOutlineCheckCircle />
            <p>Covers any form of accident</p>
          </div>
        </div>

      </div>
      <AcExclusions />
      <AccidentClaim />
      <Subfooter />
      <br />
      <PreBreakdown />
    </div>
    );
};

export default AccidentContent;