import CardWrapper from './CardWrapper'
import style from './style.module.css'
import classnames from 'classnames'
import { BsUpload, BsDownload } from 'react-icons/bs'

export default function Claim() {
  return (
    <>
      <CardWrapper title="Insurability" wrapped={false}>
        <div className="row px-5 py-3 gap-4 align-items-stretch">
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
              {/* TODO: Extract to a different component */}
              {/* TODO: Extract styling */}

              <svg className="w-100 h-100" viewBox="0 0 132.29166 132.29167">
                <ellipse
                  style={{
                    fill: 'none',
                    stroke: '#ebebeb',
                    strokeWidth: '5.29167',
                  }}
                  transform="scale(-1,1)"
                  cx="-66.145164"
                  cy="66.145149"
                  rx="63.445835"
                  ry="63.446815"
                />
                <path
                  style={{
                    fill: 'none',
                    stroke: '#ff0652',
                    strokeWidth: '5.29167',
                  }}
                  transform="scale(-1,1)"
                  d="M -2.6994057,66.14566 A 63.445835,63.446815 0 0 1 -41.865571,124.76287 63.445835,63.446815 0 0 1 -111.00822,111.00933 63.445835,63.446815 0 0 1 -124.76155,41.865614 63.445835,63.446815 0 0 1 -66.145241,2.6988449"
                />
                <path
                  style={{
                    fill: 'none',
                    stroke: '#ebebeb',
                    strokeWidth: '2.64583',
                  }}
                  transform="scale(-1,1)"
                  d="m -11.31443,66.147842 a 54.828705,54.829552 0 0 1 -33.846668,50.655898 54.828705,54.829552 0 0 1 -59.751782,-11.88555 54.828705,54.829552 0 0 1 -11.88537,-59.752709 54.828705,54.829552 0 0 1 50.655115,-33.84719"
                />
                <text x="56.14583" y="66.145835" style={{ fontWeight: 'bold' }}>
                  75%
                </text>
                <text x="50.14583" y="76.145835" fontSize="8">
                  Insurable
                </text>
              </svg>
            </div>
          </div>
          <div className="col-12 col-md-7 shadow">
            <div className="card-header bg-transparent">
              <strong>Claim Form</strong>
            </div>
            <div className="card-body row align-items-center pt-5">
              <div className="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center gap-4">
                <BsDownload style={{ fontSize: '2em' }} />
                <button className="btn btn-danger">Download Claim Form</button>
              </div>
              <div className="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center gap-4">
                <BsUpload style={{ fontSize: '2em' }} />
                <button className="btn btn-secondary">Upload Claim Form</button>
              </div>
            </div>
          </div>
        </div>
      </CardWrapper>
      <div className="card mt-2 shadow">
        <div className="card-header">
          <div className="card-body d-flex flex-column align-items-center justify-content-center gap-2">
            <BsUpload style={{ fontSize: '2em' }} />
            <span>Select File or Drag and Drop Here</span>
            <button className="btn btn-danger">Select</button>
          </div>
        </div>
      </div>
    </>
  )
}
