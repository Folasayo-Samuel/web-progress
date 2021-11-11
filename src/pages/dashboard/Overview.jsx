import { Row } from 'react-bootstrap'
import CardWrapper from './CardWrapper'
import classnames from 'classnames'
import { AiOutlineInfoCircle, AiOutlineDownCircle } from 'react-icons/ai'
import { FiFilter } from 'react-icons/fi'

import style from './style.module.css'
import Score from './Score'

export default function Overview() {
  return (
    <CardWrapper title="Overview">
      <Row className="px-2 gap-2 gap-md-5">
        <div className="offset-md-1 col-sm-12 col-md-4 card shadow">
          <div className="card-header bg-white d-flex align-items-center justify-content-between">
            <strong>Insurability Score</strong>
            <AiOutlineInfoCircle style={{ fontSize: '0.8em' }} />
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
        <div className="col-sm-12 col-md-4 card shadow">
          <div className="card-header bg-white d-flex align-items-center justify-content-between">
            <strong>Notifications</strong>
            <AiOutlineInfoCircle style={{ fontSize: '0.8em' }} />
          </div>
          <div
            className={classnames(
              'card-body position-relative',
              style.OverviewCardBody,
              style.OverviewCardNotification
            )}
          >
            <ul>
              <li>
                <article>
                  <div>
                    Date <time dateTime="7-06-2021">7-06-21</time>
                  </div>
                  <p className="py-2 border-bottom">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Corrupti, similique.
                  </p>
                </article>

                <article>
                  <div>
                    Date <time dateTime="7-06-2021">7-06-21</time>
                  </div>
                  <p className="py-2 border-bottom">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Provident ex in aperiam eligendi aliquid ratione ipsum
                    molestiae facilis fuga facere.
                  </p>
                </article>

                <article>
                  <div>
                    Date <time dateTime="7-06-2021">7-06-21</time>
                  </div>
                  <p className="py-2 border-bottom">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Veniam, itaque!
                  </p>
                </article>
              </li>
            </ul>
            <div className="position-absolute bottom-0 start-0 end-0 p-1 text-center bg-white">
              <AiOutlineDownCircle style={{ fontSize: '2em' }} />
            </div>
          </div>
        </div>
      </Row>

      <div className="mt-5 d-flex flex-column">
        <div className="dropdown align-self-end me-5">
          <button
            className="btn border dropdown-toggle fs-6"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <FiFilter /> Filter
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </div>
        <div className="p-3 mw-100 overflow-auto">
          <table
            className="table border-top border-bottom table-hover align-middle"
            style={{ borderColor: '#e5e6ea' }}
          >
            <thead>
              <tr>
                <th scope="col">Asset Insured Item</th>
                <th scope="col">Status</th>
                <th scope="col">Amount Insured</th>
                <th scope="col">Policy Start Date</th>
                <th scope="col">Policy End Date</th>
              </tr>
            </thead>
            <tbody style={{ borderColor: '#e5e6ea' }}>
              <tr>
                <td className="py-3">Iphone X</td>
                <td>
                  <span className="badge bg-theme-secondary">Pending</span>
                </td>
                <td>N40,000</td>
                <td>3 May 2022</td>
                <td>21 Oct 2022</td>
              </tr>
              <tr>
                <td className="py-3">Comry LE</td>
                <td>
                  <span className="badge bg-theme-success">Active</span>
                </td>
                <td>N40,000</td>
                <td>3 May 2022</td>
                <td>21 Oct 2022</td>
              </tr>
              <tr>
                <td className="py-3">Samsung TV</td>
                <td>
                  <span className="badge bg-theme-danger">Expired</span>
                </td>
                <td>N40,000</td>
                <td>3 May 2020</td>
                <td>21 Oct 2021</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </CardWrapper>
  )
}
