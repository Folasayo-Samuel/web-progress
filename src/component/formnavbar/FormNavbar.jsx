import { BrowserRouter, NavLink } from "react-router-dom";
import Button from "../Button/Button";
import logo from "../../assest/images/logo-black.png";
const FormNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light pt-4 ">
      <div className="container-fluid">
        <NavLink
          className="navbar-brand"
          to="#"
          style={{ textDecoration: "none" }}
        >
          <img src={logo} alt="Logo" style={{ width: "120px" }} />
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
                className="nav-linktwo dropdown-toggle pl-2"
                to="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ textDecoration: "none" }}
              >
                Products
              </NavLink>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li className="nav-item">
                  <NavLink className="  dropdown-item" to="/personalaccident">
                    Accident
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="  dropdown-item" to="/gadgetinsurance">
                    Gadget
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    className="  dropdown-item"
                    to="/comprehensivecontents"
                  >
                    Motor
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="  dropdown-item" to="/thirdpartycontent">
                    Third Party
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className="nav-linktwo dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ textDecoration: "none" }}
              >
                Renew Your Policy
              </NavLink>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="#"
                    style={{ textDecoration: "none" }}
                  >
                    Action
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    class="dropdown-item"
                    to="#"
                    style={{ textDecoration: "none" }}
                  >
                    Another action
                  </NavLink>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="#"
                    style={{ textDecoration: "none" }}
                  >
                    Something else here
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item pl-2">
              <NavLink
                style={{ textDecoration: "none" }}
                className="nav-linktwo pl-5"
                to="/fileclaim"
              >
                File a Claim
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className="nav-linktwo dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ textDecoration: "none" }}
              >
                Contact Us
              </NavLink>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="#"
                    style={{ textDecoration: "none" }}
                  >
                    Action
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    class="dropdown-item"
                    to="#"
                    style={{ textDecoration: "none" }}
                  >
                    Another action
                  </NavLink>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="#"
                    style={{ textDecoration: "none" }}
                  >
                    Something else here
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item pl-2">
              <NavLink
                className="nav-linktwo pl-5"
                to="#"
                style={{ textDecoration: "none" }}
              >
                Become a Partner
              </NavLink>
            </li>
            <li className="nav-item pl-2">
              <NavLink
                className="nav-linktwo pl-5"
                to="#"
                style={{ textDecoration: "none" }}
              >
                Cart <i className="fas fa-shopping-bag px-2"></i>
              </NavLink>
            </li>
          </ul>
          <form className="d-flex">
            {/* <button className="btn btn-outline-success login  " type="submit">
                Login
              </button> */}

            <NavLink to="/login" className="above">
              <Button className="logintwo">Login</Button>
            </NavLink>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default FormNavbar;
