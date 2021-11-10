import Speaker from "../../assest/images/Seven.png";
import ClaimForm from "./ClaimForm";


const FileClaim = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm">
                    <img src= { Speaker } alt="File Claim Speaker" style={{width: '100%'}} />
                    <p className="pt-5"> Download Claim Form <span className="co">here</span></p>
                </div>
                <div className="col">
                    <ClaimForm />
                </div>
            </div>
        </div>
    )
}

export default FileClaim;