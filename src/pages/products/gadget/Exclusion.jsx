import { AiOutlineLine } from "react-icons/ai";
import ExclusionPic from '../../../assest/images/Nine.png';
const Exclusions = () => {
    return(
        <div className="container">
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
                <img src= { ExclusionPic } alt="ExclusionPics" style={{height: 'auto', width: '100%'}} />
            </div>
            <div className="col">
                <ul className="designx">
                    <li className="lister"> Items insured under another policy</li>
                    <li className="lister"> Loss or damage arising out of or in connection with any of such occurences, namely: {" "}
                    <ul className="alphbetic">
                        <li>Earthquake, volcanic eruption or other convulsion of nature.</li>
                        <li>War, Invasion, Terrorism, nuclear exposure or explosion including resulting fire, radiation or contamination, riot, strike and civil commotion.</li>
                        <li>Loss or damage or loss of possession occassioned by or in consequence of confiscation, nationalization, requisition or willful destruction by any government or Local Authority.</li>
                    </ul>
                    </li>
                    <li className="lister"> Loss or Damage due to Wear and Tear, Moth, Vermin, Insects, Mildew or other Deterioration.</li>
                    <li className="lister"> Loss arising from Damage occassioned by or happening through any process of cleaning restoring, repairing or alteration.</li>
                    <li className="lister"> Loss or Damage due to Theft, or attempted theft, in which any member of the insured's family is concerned as Principal or accessory or Loss or Damage due to the willful act of any member of the insured's family.</li>
                    <li className="lister"> Theft from any road vehicle when left unattended unless entrance to the vehicles is gained by forcible and violent means.</li>
                    <li className="lister"> Deeds, Bonds, Bills of Exchange, Promisory Notes, Cheques, Money, securities for Money, Government or other Stamps, Manuscripts, Medals, Coins, Sculptures, Plans, Patterns, Models, Molds, Designs, Rare Books, Books of Account, or Books used in any trade or business, Travel Tickets, Documents of Title to Goods, or other Documents.</li>
                    <li className="lister"> Electrical/Mechanical derangement</li>
                    <li className="lister"> Excluding Manufacturer's defect.</li>
                </ul>
            </div>
        </div>
        </div>
    );
}

export default Exclusions;