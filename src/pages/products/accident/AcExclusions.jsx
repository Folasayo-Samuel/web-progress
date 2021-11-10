import { AiOutlineLine } from "react-icons/ai";
import AcExclusionPic from '../../../assest/images/Fourteen.png';
const AcExclusions = () => {
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
                <img src= { AcExclusionPic } alt="ComExclusionPics" style={{height: 'auto', width: '100%'}} />
            </div>
            <div className="col">
                <ul className="designx designs">
                    <li className="lister"> Injuries sustained/accidents occuring whilst the insured is under the influence of drugs/alcohol.</li><br />
                    <li className="lister"> Willful misconduct, intentional self-injury, suicide, insanity, during service in the armed forces
                    </li><br />
                    <li className="lister"> War, terrorism, nuclear exposure or explosion, invasion resulting in fire, radiation or contamination.</li>
                    <br />
                    <li className="lister"> Whilst engaging in professional sporting activities or dangerous hobbies (mountain climbing, motor racing etc)</li>
                    <br />
                    <li className="lister"> Arising or resulting from the insured committing any breach of law with criminal intent</li><br />
                    <li className="lister"> Childbirth and pregnancy related events.</li><br />
                </ul>
            </div>
        </div>
        </div>
    );
}

export default AcExclusions;