import { AiOutlineLine } from "react-icons/ai";
import Danger from "../../../assest/images/Fourteen.png";


const PartyExclusions = () => {
    return(
        <div className="container paddingBottom">
        <div className="row">
            <div className="col">
            <div className="scope pt-4">
          <h3 className="spacebottom">
            Major {" "}
            <span className="co">
              Exclusions
              <AiOutlineLine />
            </span>
          </h3>
          <ul className="designx designs">
           <li className="lister"> Insured bodily injury/property damage</li><br />
           <li className="lister"> Insured's vehicle damages and loss</li><br />
          </ul>
        </div>
         </div>
         <div className="col">
             <img src= { Danger } alt="Danger" style={{width: '100%'}} />
         </div>
        </div>
        </div>
    );
}

export default PartyExclusions;