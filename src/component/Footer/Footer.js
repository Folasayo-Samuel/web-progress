import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "../../assest/images/logo-white.png";
import {
  HealthInsurance,
  VehicleInsurance,
  GadgetInsurance,
} from "./FooterLinks";
import masterCard from "../../assest/images/card.png";
import visa from "../../assest/images/visa.png";
import ussd from "../../assest/images/ussd.png";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container pb-5">
          <img src={logo} width="150px" alt="logo" />
          <div className="row">
            <div className="col-12 col-md-6 col-lg-3">
              <div className="content pt-3">
                <h5 className="py-2">About MIB</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet neque libero veniam, quis et odit ducimus culpa quod
                  dolorem cupiditate natus excepturi sunt soluta, veritatis
                  possimus officia incidunt minus voluptatem? Fuga consequuntur
                  cum nemo iusto porro. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Commodi temporibus alias qui quasi non,
                  nisi.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="fooer_link   mx-md-5 pt-4">
                <h5>Health Insurance</h5>
                <ul className=" footer_links py-3">
                  {HealthInsurance.map((links, index) => {
                    return (
                      <li key={index}>
                        <NavLink to={links.link}>{links.linkText}</NavLink>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="fooer_link   mx-md-5 pt-4">
                <h5>Vehicle Insurance</h5>
                <ul className=" footer_links py-3">
                  {VehicleInsurance.map((links, index) => {
                    return (
                      <li key={index}>
                        <NavLink to={links.link}>{links.linkText}</NavLink>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="fooer_link   mx-md-5 pt-4">
                <h5>Gadget Insurance</h5>
                <ul className=" footer_links py-3">
                  {GadgetInsurance.map((links, index) => {
                    return (
                      <li key={index}>
                        <NavLink to={links.link}>{links.linkText}</NavLink>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="payment pt-3 ">
          <div className="container">
            <div className="foot">
              <div className="pay ">
                <h5>
                  Payment <span className="colored">Methods</span>{" "}
                </h5>
              </div>
              <div className="pay ">
                <h5>
                  Our <span className="colored">Socials</span>{" "}
                </h5>
                <p>
                  <a href="#jsda">
                    <FaTwitterSquare />
                  </a>
                  <a href="sfs#">
                    <FaFacebookSquare />
                  </a>
                  <a href="#sgsdf">
                    <FaInstagramSquare />
                  </a>
                  <a href="#sgfs">
                    <FaLinkedin />
                  </a>
                </p>
              </div>
            </div>
          </div>
          <small className="privacy   ">
            <h6> Privacy Policy </h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              dicta odio ullam facere fugiat! Quis eligendi quas quibusdam odit
            </p>
          </small>
        </div>
      </div>
    </>
  );
};

export default Footer;
