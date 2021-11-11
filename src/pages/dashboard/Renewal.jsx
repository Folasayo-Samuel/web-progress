import CardWrapper from './CardWrapper'

export default function Renewal() {
  return (
    <CardWrapper title="Renew Policy">
      <div className="card shadow">
        <div className="card-header bg-white">
          <strong>Renew Policy</strong>
        </div>
        <div className="card-body row">
          <div className="col-12 col-md-2 text-center">
            <div className="dropdown">
              <button
                className="btn btn-secondary bg-theme-secondary border px-4 dropdown-toggle fs-6"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                All
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
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
          </div>
          <div className="col-12 col-md-10 overflow-auto">
            <table className="table table-borderless align-middle">
              <thead>
                <tr>
                  <th scope="col">Policy</th>
                  <th scope="col">Policy Number</th>
                  <th scope="col">Duration</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  className="border rounded-3"
                  style={{ borderColor: '#e5e6ea' }}
                >
                  <td className="py-3">HMO</td>
                  <td>EXC678MM2</td>
                  <td>14 Days Remaining</td>
                  <td>
                    <button
                      className="btn btn-secondary bg-theme-secondary px-4"
                      disabled
                    >
                      Renew
                    </button>
                  </td>
                </tr>
                <tr style={{ height: '0.5em' }}></tr>
                <tr
                  className="border rounded-3"
                  style={{
                    borderColor: '#e5e6ea',
                  }}
                >
                  <td className="py-3">Gadget</td>
                  <td>EXC678GD2</td>
                  <td>Expired</td>
                  <td>
                    <button className="btn btn-secondary bg-theme-secondary px-4">
                      Renew
                    </button>
                  </td>
                </tr>

                <tr style={{ height: '0.5em' }}></tr>
                <tr
                  className="border rounded-3"
                  style={{
                    borderColor: '#e5e6ea',
                  }}
                >
                  <td className="py-3">HMO</td>
                  <td>EXC678MM2</td>
                  <td>5 Days Remaining</td>
                  <td>
                    <button
                      className="btn btn-secondary bg-theme-secondary px-4"
                      disabled
                    >
                      Renew
                    </button>
                  </td>
                </tr>
                <tr style={{ height: '0.5em' }}></tr>
                <tr
                  className="border rounded-3"
                  style={{
                    borderColor: '#e5e6ea',
                  }}
                >
                  <td className="py-3">HMO</td>
                  <td>EXC678MM2</td>
                  <td>Expired</td>
                  <td>
                    <button className="btn btn-secondary bg-theme-secondary px-4">
                      Renew
                    </button>
                  </td>
                </tr>
                <tr style={{ height: '0.5em' }}></tr>
                <tr
                  className="border rounded-3"
                  style={{
                    borderColor: '#e5e6ea',
                  }}
                >
                  <td className="py-3">HMO</td>
                  <td>EXC678MM2</td>
                  <td>Expired</td>
                  <td>
                    <button className="btn btn-secondary bg-theme-secondary px-4">
                      Renew
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </CardWrapper>
  )
}
