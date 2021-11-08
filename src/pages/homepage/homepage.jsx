import Nav from "../../component/navbar/Navbar";
import Partners from "../../component/partners/Partners";
import InsureSlide from "../../component/insure-slide/Insure-slide";
import Products from "../../component/products/Card.jsx";
import Proposition from "../../component/proposition/Proposition";
import Features from "../../component/features/Features";
import Subfooter from "../../component/sub-footer/Subfooter";
import Faq from "../../component/Faq/Faq";
import NewsLetter from "../../component/NewsLetter/NewsLetter";
const Homepage = () => {
  return (
    <>
      <div className="Top">
        <div className=" container">
          <Nav dark={false} />
          <div className="plan">
            <h1 className="info">
              Plan against tomorrow, by allowing us protect your interest.
            </h1>
            <p className="mt-4">Check if you are insurable here?</p>
          </div>
          <div className="top-btn mt-3">
            <button className="btn btn-outline-danger hmm mt-2 ">
              Check Insurability <i className="fas fa-arrow-right mt-2"></i>
            </button>
            <button className="btn hmm-reverse btn-get mt-2">
              Get started
            </button>
          </div>
        </div>
      </div>
      <Partners />
      <InsureSlide />
      <Products />
      <Proposition />
      <Features />
      <Subfooter />
      <InsureSlide />
      <Faq />
      <NewsLetter />
    </>
  );
};

export default Homepage;
