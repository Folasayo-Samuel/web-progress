import { AiOutlineLine } from "react-icons/ai";
import ComExclusionPic from '../../../assest/images/Eleven.png';
const ComExclusions = () => {
    return(
        <div className="container paddingBottom">
        <div className="scope pt-4">
          <h3 className="text-center spacebottom">
            Major {" "}
            <span className="co">
              Exclusions
              <AiOutlineLine />
            </span>
          </h3>
        </div>
        <div className="row">
            <div className="col-sm">
                <img src= { ComExclusionPic } alt="ComExclusionPics" style={{height: 'auto', width: '100%'}} />
            </div>
            <div className="col">
                <ul className="designx designs">
                    <li className="lister"> Mechanical Fault</li><br />
                    <li className="lister"> Driving under the influence of alcohol
                    </li><br />
                    <li className="lister"> Driving without consent of the insured</li>
                    <br />
                    <li className="lister"> Mechanical Damages due to oil leakages</li>
                    <br />
                    <li className="lister"> Wear and Tear</li><br />
                    <li className="lister"> Damage to the vehicle due to war, terrorism, invasion and civil unrest.</li><br />
                </ul>
            </div>
        </div>
        </div>
    );
}

export default ComExclusions;