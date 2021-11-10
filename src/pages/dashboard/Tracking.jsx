import CardWrapper from './CardWrapper'
import style from './style.module.css'
import classnames from 'classnames'

export default function Tracking() {
  return (
    <CardWrapper title="Track Claim" wrapped={false}>
      <div className="row px-5 py-3 gap-4 align-items-stretch">
        <div className="col-12 col-md-6 shadow">
          <div className="card-header bg-transparent">
            <strong>Track Claim</strong>
          </div>
          <div className="card-body position-relative">
            <form action="">
              <label htmlFor="input-policy-number">Policy Number</label>
              <input
                type="number"
                id="input-policy-number"
                className="form-control"
                placeholder="Enter your policy number"
              />
              <div className="d-flex justify-content-end">
                <button className="btn btn-secondary mt-2 px-5">Track</button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-12 col-md-5 fs-6">
          <div className="card shadow-sm rounded-3 border-0 d-flex mb-2">
            <div className="card-body d-flex justify-content-between">
              <span>Claim Recieved</span>
              <span className="text-success">Approved</span>
            </div>
          </div>

          <div className="card shadow-sm rounded-3 border-0 d-flex mb-2">
            <div className="card-body d-flex justify-content-between">
              <span>Required Document</span>
              <span className="text-success">Approved</span>
            </div>
          </div>

          <div className="card shadow-sm rounded-3 border-0 d-flex mb-2">
            <div className="card-body d-flex justify-content-between">
              <span>Under Review</span>
              <span className="text-warning">Awaiting</span>
            </div>
          </div>

          <div className="card shadow-sm rounded-3 border-0 d-flex mb-2">
            <div className="card-body d-flex justify-content-between">
              <span>Discharge voucher/offer</span>
              <span className="text-warning">Awaiting</span>
            </div>
          </div>

          <div className="card shadow-sm rounded-3 border-0 d-flex mb-2">
            <div className="card-body d-flex justify-content-between">
              <span>Claim Settled</span>
              <span className="text-warning">Awaiting</span>
            </div>
          </div>
        </div>
      </div>
    </CardWrapper>
  )
}
