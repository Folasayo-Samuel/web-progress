import TermsPics from '../../../assest/images/Twelve.png';

const ComTerms = () => {
    return (
        <div className="container marginTopDeal">
            <div className="row">
                <div className="col-sm BgShadows condition">
                    <img src= { TermsPics } alt="TermsPics" style={{width: '100%'}}/>
                </div>
                <div className="col PaddingTop">
                    <h3><span className="Ins">Term</span>s &amp; Condition</h3>
                    <ul className="styleTypeEdit">
                        <li className="iconsCss">&nbsp;&nbsp;Cover is placed and certificate sent to the customer within 24hours of receiving premium remittance and supporting documents.</li>
                        <li className="iconsCss">&nbsp;&nbsp;Minimum sum insured of vehicle: {" "} 1million naira</li>
                    </ul>

                    <h3><span className="Ins">Prem</span>ium Breakdown</h3>
                    <ul className="styleTypeEdit">
                        <li className="iconsCss">&nbsp;&nbsp;Premium rate: {" "} 2.5%</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ComTerms;