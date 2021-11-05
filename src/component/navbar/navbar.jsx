import { BrowserRouter, NavLink } from "react-router-dom";
import Button from "../Button/Button";
import logo from "../../assest/images/logo-black.png";

const Navbar = () => {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-light pt-4 ">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="#">
            <img src="./Image/logo.jpg" alt="Logo" style={{ width: "70px" }} />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle pl-2"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Products
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <NavLink className="dropdown-item" to="#">
                      Action
                    </NavLink>
                  </li>
                  <li>
                    <NavLink class="dropdown-item" to="#">
                      Another action
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="#">
                      Something else here
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Renew Your Policy
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <NavLink className="dropdown-item" to="#">
                      Action
                    </NavLink>
                  </li>
                  <li>
                    <NavLink class="dropdown-item" to="#">
                      Another action
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="#">
                      Something else here
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item pl-2">
                <NavLink className="nav-link" to="#">
                  File a Claim
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Contact Us
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <NavLink className="dropdown-item" to="#">
                      Action
                    </NavLink>
                  </li>
                  <li>
                    <NavLink class="dropdown-item" to="#">
                      Another action
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="#">
                      Something else here
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item pl-2">
                <NavLink className="nav-link" to="#">
                  Become a Partner
                </NavLink>
              </li>
              <li className="nav-item pl-2">
                <NavLink className="nav-link" to="#">
                  Cart <i className="fas fa-shopping-bag px-2"></i>
                </NavLink>
              </li>
            </ul>
            <form className="d-flex">
              {/* <button className="btn btn-outline-success login  " type="submit">
                Login
              </button> */}

              <NavLink to="/login" className="above">
                <Button className="login">Login</Button>
              </NavLink>
            </form>
          </div>
        </div>
      </nav>
    </BrowserRouter>
  );
};

export default Navbar;
