import propPic from '../../component/proposition/prop_image/Three.png';
const Proposition = () => {
  return (
<section className="background">
    <div className="container mt-4">
      <h2 className="pb-4 pt-4">
        <span className="Ins">Value</span> proposition
      </h2>
      <div className="row ">
      <div className="col-2 text-left">
        <ul className="listone">
          <li className="pb-5"><i className="fas fa-money-check-alt fa-1x radone"></i> Affordable digital insurance products</li>
          <li className="pb-5"><i className="fas fa-shield-alt fa-1x radone"></i> Seamless purchase of insurance products</li>
          <li className="pb-5"><i className="fas fa-user-shield fa-1x radone"></i> Adequate cover with reliable insurance partners</li>
          <li className="pb-5"><i className="fas fa-clock fa-1x"></i> Prompt claim settlement process</li>
        </ul>
      </div>
      <div className="col-6 text-center pl-70">
        <img src={ propPic } alt="Phone"  style= {{width: '45%'}}/>
      </div>
        <div className="col-2">
        <ul className="listtwo">
          <li className="pb-5">Real time Tracking and monitoring your claims <i className="fas fa-crosshairs fa-1x rad"></i></li> 
          <li className="pb-5">Approved repair partners for all Gadget claims with leading support partners across the country. <i className="far fa-check-circle rad fa-1x"></i></li>
          <li className="pb-5">Partnered with one of Nigeria's leading Auto repairer to enable you complete your motor claims process faster <i className="fas fa-car fa-1x rad"></i></li>
        </ul>
      </div>

      </div>
      
    </div>
  </section>
  );

};

export default Proposition;
