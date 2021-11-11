import CardWrapper from './CardWrapper'
import style from './style.module.css'
import classnames from 'classnames'
import Score from './Score'

export default function Insurability() {
  return (
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
            <strong>Take Insurability Test</strong>
          </div>
          <div className="card-body text-center">
            <button className="btn btn-outline-danger btn-outline-theme px-5 mt-4 rounded-3">
              Take Test
            </button>
          </div>
        </div>
      </div>
    </CardWrapper>
  )
}
