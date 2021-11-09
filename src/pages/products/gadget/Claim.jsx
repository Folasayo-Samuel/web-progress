import Shield from '../../../assest/images/Fifteen.png';

const MakeClaim = () => {
    return(
        <div className="container bgcolour ">
            <div className="row">
                <h3 className="colorwhyte">How Make A Claim</h3>
                <div className="col">
                    <ul className="colourwhite">
                        <li>Completed claim form</li>
                        <li>Purchase receipt of insured item or evidence of insured item</li>
                        <li>Police report (Burglary/theft related claims)</li>
                        <li>Estimate of gadget repairs</li>
                        <li>Discharge voucher/after will be communicated within(72 hours) of receipt of full required documentation.</li>
                        <li>Fund transfer will be made within 48 hours of receiving executed after/discharge voucher</li>
                    </ul>
                </div>
                <div className="col-sm">
                    <img src= { Shield } alt="TheShieldPics" style={{width: '100%'}}/>
                </div>
            </div>
        </div>
    )
}

export default MakeClaim;