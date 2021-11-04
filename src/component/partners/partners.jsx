import { PartnerImg } from './partnerImage';

const Partners = () => {
    return(
        <div className="mt-5 partner-section">
            <div className="container">
                <h2 className="mt-5 mb-3">Our Insurance <span className="part">Partners</span></h2>

                <div className="row partner-imgs">
                    {PartnerImg.map((data, index)=>(
                        <div className="img-box" key={index}>
                            <img src={data.url} alt={data.id}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Partners