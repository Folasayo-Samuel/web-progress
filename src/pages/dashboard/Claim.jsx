import CardWrapper from './CardWrapper'
import style from './style.module.css'
import classnames from 'classnames'
import { BsUpload, BsDownload } from 'react-icons/bs'
import Score from './Score'

export default function Claim() {
  return (
    <>
      <CardWrapper title="Insurability" wrapped={false}>
        <div className="row px-md-5 py-3 gap-4 align-items-stretch">
          <div className="col-12 col-md-4 shadow">
            <div className="card-header bg-transparent">
              <strong>Insurability Score</strong>
            </div>
            <div
              className={classnames(
                'card-body position-relative',
                style.OverviewCardBody
              )}
            >
              <Score />
            </div>
          </div>
          <div className="col-12 col-md-7 shadow">
            <div className="card-header bg-transparent">
              <strong>Claim Form</strong>
            </div>
            <div className="card-body row align-items-center pt-5">
              <div className="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center gap-4">
                <BsDownload style={{ fontSize: '2em' }} />
                <button className="btn btn-danger bg-theme">
                  Download Claim Form
                </button>
              </div>
              <div className="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center gap-4">
                <BsUpload style={{ fontSize: '2em' }} />
                <button className="btn btn-secondary bg-theme-secondary">
                  Upload Claim Form
                </button>
              </div>
            </div>
          </div>
        </div>
      </CardWrapper>
      <div className="card border-0 mt-2 shadow-md">
        <div className="card-body d-flex flex-column align-items-center justify-content-center gap-2">
          <BsUpload style={{ fontSize: '2em' }} />
          <span>Select File or Drag and Drop Here</span>
          <button className="btn btn-danger bg-theme">Select</button>
        </div>
      </div>
    </>
  )
}
