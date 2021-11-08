import Fimage from "../../component/features/image/One.png";
const Features = () => {
  return (
    <section className="backgrade pb-5">
      <div className="container">
        <h2 className="light pt-5 ">
          <span className="Inss">Featur</span>es
        </h2>
      </div>
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 col-md-6 features_text">
            <ul className="style">
              <li className="">
                Buying adequate and customized digital insurance products
              </li>
              <li>Report and track claim</li>
              <li className="">
                Prompt Renewal System Notification sent to clients and clients
                can renew instantly following the steps
              </li>
              <li className="">
                Access to over 300 auto repair partners: Faster method of
                getting estimate of reports, approved auto repair workshops
                listed on the platform to choose from
              </li>
              <li className="">
                Access to leading and reliable Gadget support partners
              </li>
            </ul>
          </div>
          <div className="righttwo text-center col-md-6 col-12">
            <img
              src={Fimage}
              alt="Mobile_View_Image"
              style={{ width: "70%" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
