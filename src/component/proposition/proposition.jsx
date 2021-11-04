import propPic from '../../component/proposition/prop_image/Three.jpg';
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
          <li>Affordable digital insurance products</li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="col-6 text-center pt-0">
        <img src={ propPic } alt="Phone"  style= {{width: '25%'}}/>
      </div>
        <div className="col-2">
        <ul className="listtwo">
          <li>Affordable</li>
          <li>digital</li>
          <li>products</li>
          <li>insurance</li>
        </ul>
      </div>

      </div>
      
    </div>
  </section>
  );

};

export default Proposition;
