import Speaker from "../../assest/images/Seven.png";
import Footer from "../../component/Footer/Footer";
import FormNavbar from "../../component/formnavbar/FormNavbar";
import Navbar from "../../component/navbar/Navbar";
import ClaimForm from "./ClaimForm";

const FileClaim = () => {
  return (
    <div>
      <div className="container">
        <FormNavbar />

        <div className="row">
          <div className="col-sm">
            <img
              src={Speaker}
              alt="File Claim Speaker"
              style={{ width: "100%" }}
            />
            <p className="pt-5">
              {" "}
              Download Claim Form <span className="co">here</span>
            </p>
          </div>
          <div className="col">
            <ClaimForm />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FileClaim;
