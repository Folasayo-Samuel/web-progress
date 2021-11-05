import React from "react";

const Products = () => {
  return (
    <div className="container">
      <h2 className="pb-4 ">
        <span className="Ins">Mib Di</span>gital Products
      </h2>
      <div className="row">
        <div class="  col-sm-12 col-md-4 px-2 mt-4">
          <div className="cardtwo">
            <div className="card-img">
              <div className="stand standOne">
                <i class="fas fa-heartbeat fa-2x"></i>
              </div>
            </div>
            <div className="containertwo">
              <h6 className="text-center pt-3">Life Insurance</h6>
              <ul className="list">
                <li className="pb-3">
                  <span className="optionBox">
                    <i class="far fa-check-square arrow fa-1x"></i>
                    <span>Personal Accident Insurance</span>
                  </span>
                  <i class="fas fa-arrow-right"></i>
                </li>
                <li className="pb-3">
                  <span className="optionBox">
                    <i class="far fa-check-square arrow fa-1x"></i>
                    <span>Life Assurance </span>
                  </span>
                  <i class="fas fa-arrow-right"></i>
                </li>
                <li className="pb-5">
                  <span className="optionBox">
                    <i class="far fa-check-square arrow fa-1x"></i>
                    <span>Life Savings </span>
                  </span>
                  <i class="fas fa-arrow-right"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="  col-sm-12 col-md-4 px-2 mt-4">
          <div className="cardtwo">
            <div className="card-img">
              <div className=" stand standTwo">
                <i class="fas fa-cross fa-2x"></i>
              </div>
            </div>
            <div className="containertwo">
              <h6 className="text-center pt-3">Health Insurance</h6>
              <ul className="list">
                <li className="pb-3">
                  <span className="optionBox">
                    <i class="far fa-check-square arrow fa-1x"></i>
                    <span> Pharmacy </span>
                  </span>
                  <i class="fas fa-arrow-right"></i>
                </li>
                <li className="pb-3">
                  <span className="optionBox">
                    <i class="far fa-check-square arrow fa-1x"></i>
                    <span> Comprehensive HMO</span>
                  </span>
                  <i class="fas fa-arrow-right"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="  col-sm-12 col-md-4 px-2 mt-4">
          <div className="cardtwo">
            <div className="card-img">
              <div className=" stand standThree">
                <i class="fas fa-book fa-2x"></i>
              </div>
            </div>
            <div className="containertwo">
              <h6 className="text-center pt-3">Assets Insurance</h6>
              <ul className="list">
                <li className="pb-3">
                  <span className="optionBox">
                    <i class="far fa-check-square arrow fa-1x"></i>
                    <span> Gadget Insurance</span>
                  </span>
                  <i class="fas fa-arrow-right"></i>
                </li>
                <li className="pb-3">
                  <span className="optionBox">
                    <i class="far fa-check-square arrow fa-1x"></i>
                    <span> Car and Automobile Insurance</span>
                  </span>
                  <i class="fas fa-arrow-right"></i>
                </li>
                <li className="pb-3">
                  <span className="optionBox">
                    <i class="far fa-check-square arrow fa-1x"></i>
                    <span> Building Insurance</span>
                  </span>
                  <i class="fas fa-arrow-right"></i>
                </li>
                <li className="pb-3">
                  <span className="optionBox">
                    <i class="far fa-check-square arrow fa-1x"></i>
                    <span> Householders Insurance</span>
                  </span>
                  <i class="fas fa-arrow-right"></i>
                </li>
                <li className="pb-3">
                  <span className="optionBox">
                    <i class="far fa-check-square arrow fa-1x"></i>
                    <span> Comprehensive Motor</span>
                  </span>
                  <i class="fas fa-arrow-right"></i>
                </li>
                <li className="pb-5">
                  <span className="optionBox">
                    <i class="far fa-check-square arrow fa-1x"></i>
                    <span> All 3rd Party Motor Policies</span>
                  </span>
                  <i class="fas fa-arrow-right"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
