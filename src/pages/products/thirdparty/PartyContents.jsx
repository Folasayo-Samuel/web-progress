import ThirdpartyNav from "../../../component/ThirdpartyNav/ThirdpartyNav";
import FourPics from "../../../assest/images/Four.jpg";
import SixthPics from "../../../assest/images/Six.png";
import { BrowserRouter, Link } from "react-router-dom";
import Button from "../../../component/Button/Button";
import { FaShieldAlt } from "react-icons/fa";
import {AiOutlineCheckCircle, AiOutlineLine } from "react-icons/ai";
import PartyExclusions from "./PartyExclusions";
import PartyClaim from "./PartyClaim";
import Subfooter from "../../../component/sub-footer/Subfooter";
import PartyTerms from "./PartyTerms";

const PartyContents = () => {
    return (
        <div className="container" style={{ position: "relative" }}>
      <ThirdpartyNav />
      <div className="row" style={{ positiion: "relative" }}>
        <div className="col-6" style={{ marginTop: "200px" }}>
          <h2>
              THIRD PARTY MOTOR{" "}
            <span className="Ins"> INSURA</span>NCE
          </h2>
          <br />
          <BrowserRouter>
            <form className="">
              <Link to="/thirdpartyform" className="">
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
              src={ FourPics }
              alt="Vehicles" style={{width: '100%'}}/>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <img src= { SixthPics } alt="ThirdPartyInsurancePics" style={{width: '100%'}}/>
          </div>

          <div className="col scope pt-4">
          <h3>
            Scope of{" "}
            <span className="co">
              Cover
              <AiOutlineLine />
            </span>
          </h3>
          <p><AiOutlineCheckCircle /> 3rd party Bodily injury</p>
          <p><AiOutlineCheckCircle /> 3rd party property damage up to (1million naira)</p>
          </div>
        </div>

        <PartyExclusions />
        <PartyClaim />
        <Subfooter />
        <PartyTerms />
      </div>
    </div>
    );
};

export default PartyContents;