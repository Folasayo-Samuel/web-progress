import React from "react";
import { FaAndroid, FaApple } from "react-icons/fa";
const Subfooter = () => {
  return (
    <section className="backy">
      <div className="container">
        <div className="row sub_footer">
          <h4 className="sub col-sm-12 col-md-6 ">Download our app from</h4>
          <div className="col-md-6 sub_footer_btn ">
            <a href="www.demo.com" className="mt-3 app_btn">
              <p>
                <FaAndroid />
              </p>
              <span className="btn-text">
                <small>Available on the</small>
                <h3>Google Store </h3>
              </span>
            </a>

            <a href="www.demo.com" className=" mt-3 app_btn">
              <p>
                <FaApple />
              </p>
              <span className="btn-text">
                <small> Available on the</small>
                <h3>Ios App Store </h3>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subfooter;
