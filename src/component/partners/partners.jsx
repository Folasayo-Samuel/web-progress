import { PartnerImg } from './partnerImage';

const Partners = () => {
    return(
        <div className=" partner-section">
            <div className="container">
                <h2 className="mb-3">Our Insurance <span className="part">Partners</span></h2>

                <div className="row justify-content-between partner-imgs">
                    {PartnerImg.map((data, index)=>(
                        <div className="img-box " key={index}>
                            <img src={data.url} alt={data.id} className="resImage" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Partners