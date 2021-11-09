import ComInsNav from "../../../component/ComInsNav/ComInsNav";
import TenPics from "../../../assest/images/Ten.png";
// import { FontAwesomeIcon } from '@fontawesome/react-fontawesome';
import { BrowserRouter, Link } from "react-router-dom";
import Button from "../../../component/Button/Button";
import { FaShieldAlt } from "react-icons/fa";
import {AiOutlineCheckCircle, AiOutlineLine } from "react-icons/ai";
import ComExclusions from './ComExclusions';
import ComClaim from './ComClaim';
import Subfooter from '../../../component/sub-footer/Subfooter';
import ComTerms from './ComTerms';

const ComContents = () => {
  return (
    <div className="container" style={{ position: "relative" }}>
      <ComInsNav />
      <div className="row" style={{ positiion: "relative" }}>
        <div className="col-6" style={{ marginTop: "200px" }}>
          <h2>
              COMPREHENSIVE MOTOR{" "}
            <span className="Ins"> INSURA</span>NCE
          </h2>
          <br />
          <BrowserRouter>
            <form className="">
              <Link to="/register" className="">
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
              src={ TenPics }
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
            <p>Physical Damages</p>
          </div>
          <div className="col">
            {/* <FontAwesomeIcon icon={["far", "fa-check-circle"]} fixedWidth /> */}
            <AiOutlineCheckCircle />
            <p>Theft</p>
          </div>
          <div className="col">
            {/* <FontAwesomeIcon icon={["far", "fa-check-circle"]} fixedWidth /> */}
            <AiOutlineCheckCircle /> 
            <p>Fire</p>
          </div>
          <div className="col">
            {/* <FontAwesomeIcon icon={["far", "fa-check-circle"]} fixedWidth /> */}
            <AiOutlineCheckCircle /> 
            <p>3rd party liabilities (Property Damage, death and bodily injury)</p>
          </div>
        </div>
        <div className="row text-center">
          <div className="col">
            {/* <FontAwesomeIcon icon={["far", "fa-check-circle"]} /> */}
            <AiOutlineCheckCircle />
            <p>0% Policy excess</p>
          </div>
          <div className="col">
            {/* <FontAwesomeIcon icon={["far", "fa-check-circle"]} fixedWidth /> */}
            <AiOutlineCheckCircle />
            <p>Towing (Limited)</p>
          </div>
          <div className="col">
            {/* <FontAwesomeIcon icon={["far", "fa-check-circle"]} fixedWidth /> */}
            <AiOutlineCheckCircle /> 
            <p>Loss of personal effect</p>
          </div>
          <div className="col">
            {/* <FontAwesomeIcon icon={["far", "fa-check-circle"]} fixedWidth /> */}
            <AiOutlineCheckCircle /> 
            <p>Tracker installation for vehicles above (4milion naira)</p>
          </div>
        </div>
        <ComExclusions /> 
        <ComClaim />  
        <Subfooter /> 
        <ComTerms />    
      </div>
    </div>
  );
};

export default ComContents;
