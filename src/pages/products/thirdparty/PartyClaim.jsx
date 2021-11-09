import Shield from '../../../assest/images/Fifteen.png';

const PartyClaim = () => {
    return(
        <div className="container bgcolour ">
            <div className="row">
                <h3 className="colorwhyte">Claim Requirement</h3>
                <div className="col">
                    <ul className="colourwhite">
                        <li>Completed Claim form</li>
                        <li>Police report (if applicable)</li>
                        <li>Estimate of Repairs</li>
                        <li>Pictures of the damaged vehicle</li>
                    </ul>
                    <h3 style={{color: '#fff'}}>Claim Procedure</h3>
                    <ul className="colourwhite">
                        <li>Claim notification must be sent to PRA/insurer within 72 hours of occurence</li>
                        <li>Discharge voucher is issued (3) days after receiving required documentation.</li>
                        <li>Claim settlement is made within (3) days of receiving duly completed offer.</li>
                    </ul>
                </div>
                <div className="col-sm">
                    <img src= { Shield } alt="TheShieldPics" style={{width: '100%'}}/>
                </div>
            </div>
        </div>
    )
}

export default PartyClaim;