import Shield from '../../../assest/images/Fifteen.png';

const AccidentClaim = () => {
    return(
        <div className="container bgcolour ">
            <div className="row">
                <h3 className="colorwhyte">Claim Requirement</h3>
                <div className="col">
                    <ul className="colourwhite">
                        <li>Duly completed Claim form</li>
                        <li>Pictures of bodily injury</li>
                        <li>Medical Bill</li>
                    </ul>
                </div>
                <div className="col-sm">
                    <img src= { Shield } alt="TheShieldPics" style={{width: '100%'}}/>
                </div>
            </div>
        </div>
    )
}

export default AccidentClaim;