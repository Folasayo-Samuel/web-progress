import Navbar from "../../component/navbar/navbar";
import Partners from "../../component/partners/partners";
import InsureSlide from "../../component/insure-slide/insure-slide";
import Products from "../../component/products/card";
import Proposition from '../../component/proposition/proposition';
import Features from '../../component/features/features';
import Subfooter from '../../component/sub-footer/subfooter';
const Homepage = () => {
  return (
    <>
      <div className="Top">
        <div className=" container">
          <Navbar />
          <div className="plan">
            <h1 className="info">
              Plan against tomorrow, by allowing us protect your interest.
            </h1>
            <p className="mt-4">Check if you are insurable here?</p>
          </div>
          <div className="top-btn mt-3">
            <button className="btn btn-outline-danger hmm ">
              Check Insurability <i class="fas fa-arrow-right mt-2"></i>
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
    </>
  );
};

export default Homepage;
