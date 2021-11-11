import propPic from "../../component/proposition/prop_image/Three.png";
const Proposition = () => {
  return (
    <div className="background">
      <div className="container">
        <h2 className="pb-4 pt-4">
          <span className="Ins">Value</span> proposition
        </h2>
        <div className="row ">
          <div className="col-sm-12 col-md-4  text-left">
            <ul className="listone">
              <li className="pb-5">
                <span className="iconBox">
                  <i className="fas fa-money-check-alt fa-1x radone"></i>
                </span>
                <span className="text">
                  Affordable digital insurance products
                </span>
              </li>
              <li className="pb-5">
                <span className="iconBox">
                  <i className="fas fa-shield-alt fa-1x radone"></i>
                </span>
                <span className="text">
                  {" "}
                  Seamless purchase of insurance products
                </span>
              </li>
              <li className="pb-5">
                <span className="iconBox">
                  <i className="fas fa-user-shield fa-1x radone"></i>
                </span>
                <span className="text">
                  {" "}
                  Adequate cover with reliable insurance partners
                </span>
              </li>
              <li className="pb-5">
                <span className="iconBox">
                  <i className="fas fa-clock fa-1x"></i>
                </span>
                <span> Prompt claim settlement process</span>
              </li>
            </ul>
          </div>
          <div className="  col-sm-12 col-md-3 d-flex justify-content-start text-center ">
            <img src={propPic} alt="Phone" style={{ width: "85%" ,  }} />
          </div>
          <div className="col-sm-12 col-md-4 mt-5">
            <ul className="listtwo list">
              <li className="pb-5">
                <span>Real time Tracking and monitoring your claims </span>
                <span className="iconBox">
                  <i className="fas fa-crosshairs fa-1x rad"></i>
                </span>
              </li>
              <li className="pb-5">
                <span>
                  Approved repair partners for all Gadget claims with leading
                  support partners across the country.
                </span>
                <span className="iconBox">
                  <i className="far fa-check-circle rad fa-1x"></i>
                </span>
              </li>
              <li className="pb-5">
                <span>
                  Partnered with one of Nigeria's leading Auto repairer to
                  enable you complete your motor claims process faster
                </span>
                <span className="iconBox">
                  <i className="fas fa-car fa-1x rad"></i>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proposition;
