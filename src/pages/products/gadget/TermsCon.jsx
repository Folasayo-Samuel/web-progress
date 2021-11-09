import TermsPics from '../../../assest/images/Twelve.png';

const TermsCondition = () => {
    return (
        <div className="container marginTopDeal">
            <div className="row">
                <div className="col-sm BgShadows condition">
                    <img src= { TermsPics } alt="TermsPics" style={{width: '100%'}}/>
                </div>
                <div className="col PaddingTop">
                    <h3><span className="Ins">Term</span>s &amp; Condition</h3>
                    <ul className="styleTypeEdit">
                        <li className="iconsCss">&nbsp;&nbsp;Minimum sum insured is &#8358;40,000</li>
                        <li className="iconsCss">&nbsp;&nbsp;Policy document will be sent within 3 hours of receiving premium payment</li>
                        <li className="iconsCss">&nbsp;&nbsp;Claim threshold/settlement must not exceed sum insured</li>
                        <li className="iconsCss">&nbsp;&nbsp;Limited number of claims notification (3 times a year)</li>
                        <li className="FontAwesomeIcons iconsCss">&nbsp;&nbsp;Policy excess of 10% will be deducted on any claim settlement</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TermsCondition;