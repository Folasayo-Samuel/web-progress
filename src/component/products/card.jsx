const Products = () => {
    return (
        <div className="container">
        <h2 className="pb-4 "><span className="Ins">Mib Di</span>gital Products</h2>
        <div className="row">
        <div class="cardtwo col-sm-4 mt-4">
            <div className="card-img">
            <div className="stand standOne">
            <i class="fas fa-heartbeat fa-2x"></i>
            </div>
            </div>
          <div className="containertwo">
           <h6 className="text-center pt-3"><b>Life Insurance</b></h6>
            <ul className="list">
                <li className="pb-3"><i class="far fa-check-square arrow fa-1x"></i>Personal Accident Insurance <i class="fas fa-arrow-right"></i></li>
                <li className="pb-3"><i class="far fa-check-square arrow fa-1x"></i>Life Assurance <i class="fas fa-arrow-right"></i></li>
                <li className="pb-5"><i class="far fa-check-square arrow fa-1x"></i>Life Savings <i class="fas fa-arrow-right"></i></li>
            </ul>
            </div>
           </div>

        <div class="cardtwo col-sm-4 mt-4">
        <div className="card-img">
        <div className="standTwo">
        <i class="fas fa-cross fa-2x"></i>
        </div>
        </div>
          <div className="containertwo">
           <h6 className="text-center pt-3"><b>Health Insurance</b></h6>
            <ul className="list">
                <li className="pb-3"><i class="far fa-check-square arrow fa-1x"></i> Pharmacy <i class="fas fa-arrow-right"></i></li>
                <li className="pb-3"><i class="far fa-check-square arrow fa-1x"></i> Comprehensive HMO <i class="fas fa-arrow-right"></i></li>
            </ul>
            </div>
           </div>

           <div class="cardtwo  col-sm-4 mt-4">
           <div className="card-img">
               <div className="standThree">
               <i class="fas fa-book fa-2x"></i>
               </div>
            </div>
          <div className="containertwo">
           <h6 className="text-center pt-3"><b>Assets Insurance</b></h6>
            <ul className="list">
                <li className="pb-3"> <i class="far fa-check-square arrow fa-1x"></i> Gadget Insurance <i class="fas fa-arrow-right"></i></li>
                <li className="pb-3"> <i class="far fa-check-square arrow fa-1x"></i> Car and Automobile Insurance <i class="fas fa-arrow-right"></i></li>
                <li className="pb-3"> <i class="far fa-check-square arrow fa-1x"></i> Building Insurance <i class="fas fa-arrow-right"></i></li>
                <li className="pb-3"> <i class="far fa-check-square arrow fa-1x"></i> Householders Insurance <i class="fas fa-arrow-right"></i></li>
                <li className="pb-3"> <i class="far fa-check-square arrow fa-1x"></i> Comprehensive Motor <i class="fas fa-arrow-right"></i></li>
                <li className="pb-5"> <i class="far fa-check-square arrow fa-1x"></i> All 3rd Party Motor Policies <i class="fas fa-arrow-right"></i></li>
            </ul>
            </div>
           </div>
        </div>
        </div>
    );
}

export default Products;