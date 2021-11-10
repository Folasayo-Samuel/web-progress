import GadgetNavbar from "../../../component/GadgetNavbar/GadgetNav";
import EightPics from "../../../assest/images/Eight.png";
// import { FontAwesomeIcon } from '@fontawesome/react-fontawesome';
import { BrowserRouter, Link } from "react-router-dom";
import Button from "../../../component/Button/Button";
import { FaShieldAlt } from "react-icons/fa";
import { AiOutlineCheckCircle, AiOutlineLine } from "react-icons/ai";
import Exclusions from "./Exclusion";
import MakeClaim from "./Claim";
import Subfooter from "../../../component/sub-footer/Subfooter";
import TermsCondition from "./TermsCon";
import Footer from "../../../component/Footer/Footer";

const GadgetInsurance = () => {
  return (
    <div>
      <div className="container mt-3" style={{ position: "relative" }}>
        <GadgetNavbar />
        <div className="row" style={{ positiion: "relative" }}>
          <div className="col-6" style={{ marginTop: "200px" }}>
            <h2>
              <span className="Ins">Gadg</span>et Insurance
            </h2>
            <p>
              Protecting your valuable assets should be a commitment everyone
              should make regardless if it's just your mobile phones, it's still
              your asset!
            </p>
            <p>
              This is why we've partnered with NSIA insurance Limited to design
              and ensure adequate cover for your treasured gadgets.
            </p>
            <BrowserRouter>
              <form>
                <Link to="/login" className="">
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
              <img src={EightPics} alt="apple gadget" />
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
            <p className="text-center pb-4">
              This All-risk policy covers against accidental and material
              damages &amp; loss to the device which includes:{" "}
            </p>
          </div>
          <div className="row text-center">
            <div className="col">
              {/* <FontAwesomeIcon icon={["far", "fa-check-circle"]} /> */}
              <AiOutlineCheckCircle />
              <p>Material Damages including screens, panels and motherboard</p>
            </div>
            <div className="col">
              {/* <FontAwesomeIcon icon={["far", "fa-check-circle"]} fixedWidth /> */}
              <AiOutlineCheckCircle />
              <p>Fire, Flood, storm and other insured perils.</p>
            </div>
            <div className="col">
              {/* <FontAwesomeIcon icon={["far", "fa-check-circle"]} fixedWidth /> */}
              <AiOutlineCheckCircle />
              <p>Theft/burglary</p>
            </div>
          </div>
          <Exclusions />
          <MakeClaim />
          <Subfooter />
          <TermsCondition />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GadgetInsurance;
