import classNames from 'classnames'
import CardWrapper from './CardWrapper'

import style from './style.module.css'

export default function Wallet() {
  return (
    <>
      <CardWrapper title="Wallet" wrapped={false}>
        <div className="row p-2 align-items-stretch gap-3 gap-md-0 justify-content-around">
          <div className="col-12 col-md-5 card shadow-sm">
            <div className="card-header bg-white">
              <strong>Fund Wallet</strong>
            </div>
            <div className="card-body">
              <form action="">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter amount"
                />
                <button className="btn btn-success mt-2 px-4">Fund</button>
              </form>
            </div>
          </div>
          <div className="col-12 col-md-5 card shadow-sm">
            <div className="card-body row align-items-center">
              <div className="col-6">
                <img src="/images/credit-card.png" class="img-fluid" />
              </div>
              <div
                className={classNames(
                  'col-6 d-flex flex-column justify-center',
                  style.PrimaryTextColor
                )}
              >
                <a href="">Add New Card</a>
                <a href="">Remove Card</a>
              </div>
            </div>
          </div>
        </div>
      </CardWrapper>
      <div className="flex-grow-1 row mx-1 justify-content-between">
        <div className="card col-12 col-md-7 border-0 card shadow rounded rounded-3">
          <div className="card-header bg-white">
            <strong>Transaction History</strong>
          </div>
          <div className="card-body mw-100 overflow-auto">
            <table class="table table-hover align-middle">
              <thead>
                <tr>
                  <th scope="col">Amount Funded</th>
                  <th scope="col">Status</th>
                  <th scope="col">Date</th>
                  <th scope="col">Time</th>
                </tr>
              </thead>
              <tbody style={{ borderColor: '#e5e6ea' }}>
                <tr>
                  <td>N50,000</td>
                  <td>
                    <span className="badge bg-success">Successful</span>
                  </td>
                  <td>7/24/2022</td>
                  <td>10:34am</td>
                </tr>
                <tr>
                  <td>N50,000</td>
                  <td>
                    <span className="badge bg-danger">Failed</span>
                  </td>
                  <td>7/24/2022</td>
                  <td>10:30am</td>
                </tr>
                <tr>
                  <td>N70,000</td>
                  <td>
                    <span className="badge bg-success">Successful</span>
                  </td>
                  <td>7/24/2020</td>
                  <td>08:30am</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="col-12 col-md-5 mt-4 mt-md-0 border-0">
          <div
            className={classNames(
              style.WalletCard,
              'card text-white border-0 rounded-3'
            )}
            style={{ background: '#fcb000' }}
          >
            <div className="card-header bg-transparent">Available Balance</div>
            <div className="card-body">
              <span className="fs-2">N120,000.00</span>
            </div>
          </div>
          <div
            className={classNames(
              style.WalletCard,
              'card text-white border-0 rounded-3 mt-2'
            )}
            style={{ background: '#273943' }}
          >
            <div className="card-header bg-transparent">Available Balance</div>
            <div className="card-body">
              <span className="fs-2 text-danger">-N10,000.00</span>
            </div>
          </div>{' '}
        </div>
      </div>
    </>
  )
}
