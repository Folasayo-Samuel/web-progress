import { Container, Row } from 'react-bootstrap'
import { FaPencilAlt } from 'react-icons/fa'
import { BiWallet, BiSearch } from 'react-icons/bi'
import { MdSignalCellularAlt, MdOutlineAutorenew } from 'react-icons/md'
import { RiEdit2Line, RiFileEditLine } from 'react-icons/ri'
import { GiHamburgerMenu } from 'react-icons/gi'
import classnames from 'classnames'

import style from './style.module.css'
import {
  NavLink,
  Route,
  Switch,
  useLocation,
  useRouteMatch,
} from 'react-router-dom'
import Overview from './Overview'
import Wallet from './Wallet'
import Insurability from './Insurability'
import Claim from './Claim'
import Tracking from './Tracking'
import Renewal from './Renewal'
import Profile from './Profile'
import { useEffect } from 'react'

export default function Dashboard() {
  const { url, path } = useRouteMatch()
  const location = useLocation()

  useEffect(() => {
    const dashboardNav = document.getElementById('navLinks-Container')
    if (dashboardNav) {
      dashboardNav.classList.remove('show')
    }
  }, [location])
  return (
    <Container
      fluid={true}
      className={classnames(style.Container, 'vw-100 vh-100 position-relative')}
    >
      <Row className="w-100 h-100 m-0">
        <nav
          id="navbar"
          className="fixed-top top-0 start-0 mh-100 overflow-hidden col-md-3 col-lg-2 d-md-flex flex-column bg-white px-0"
          style={{ zIndex: '1000' }}
        >
          <button
            className="btn btn-outline-primary position-absolute d-md-none border text-theme"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navLinks-Container"
            aria-controls="navLinks-Container"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ right: '1em', top: '0.5em' }}
          >
            <GiHamburgerMenu />
          </button>
          <figure className="d-flex flex-md-column align-items-center px-2 pb-0 pt-2 pt-md-4 pb-md-2 gap-2">
            <div className={style.AvaterImageContainer}>
              <img
                src="/images/obama.jpg"
                alt="User Profile Image"
                className="img-fluid rounded-circle w-100 h-100"
              />
            </div>
            <figcaption>Barack Obama</figcaption>
            <div className="text-theme d-none d-md-block">My Profile</div>
          </figure>
          <div className="border-bottom"></div>

          <div
            id="navLinks-Container"
            className={classnames(
              style.NavLinksContainer,
              'mt-4 flex-grow-1 vh-100 d-md-flex flex-column collapse'
            )}
          >
            <h6 className="m-0 mb-3 ms-2 px-2">Menu</h6>
            <ul className="d-flex flex-column gap-3">
              <li>
                <NavLink
                  to={url}
                  activeClassName={style.NavLinkActive}
                  className={style.NavLink}
                  exact
                >
                  <MdSignalCellularAlt className={style.NavLinkIcon} /> Overview
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`${url}/wallet`}
                  activeClassName={style.NavLinkActive}
                  className={style.NavLink}
                >
                  <BiWallet className={style.NavLinkIcon} /> Wallet
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`${url}/insurability`}
                  activeClassName={style.NavLinkActive}
                  className={style.NavLink}
                >
                  <RiEdit2Line className={style.NavLinkIcon} /> Insurabilty
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`${url}/claim`}
                  activeClassName={style.NavLinkActive}
                  className={style.NavLink}
                >
                  <RiFileEditLine className={style.NavLinkIcon} /> File a claim
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`${url}/tracking`}
                  activeClassName={style.NavLinkActive}
                  className={style.NavLink}
                >
                  <BiSearch className={style.NavLinkIcon} /> Track claim
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`${url}/renewal`}
                  activeClassName={style.NavLinkActive}
                  className={style.NavLink}
                >
                  <MdOutlineAutorenew className={style.NavLinkIcon} /> Renew
                  policy
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`${url}/profile`}
                  activeClassName={style.NavLinkActive}
                  className={style.NavLink}
                >
                  <FaPencilAlt className={style.NavLinkIcon} /> Edit profile
                </NavLink>
              </li>
            </ul>
            <button className="btn bg-theme d-block px-5 text-white order-md-5 mt-5 mt-md-auto m-auto">
              Logout
            </button>
          </div>
        </nav>
        <div className="col-md-9 ms-sm-auto col-lg-10 py-3 pt-5 pt-md-4 px-md-4 d-flex flex-column gap-3">
          <Switch>
            <Route path={path} exact>
              <Overview />
            </Route>
            <Route path={`${path}/wallet`}>
              <Wallet />
            </Route>
            <Route path={`${path}/insurability`}>
              <Insurability />
            </Route>
            <Route path={`${path}/claim`}>
              <Claim />
            </Route>
            <Route path={`${path}/tracking`}>
              <Tracking />
            </Route>
            <Route path={`${path}/renewal`}>
              <Renewal />
            </Route>
            <Route path={`${path}/profile`}>
              <Profile />
            </Route>
          </Switch>
        </div>
      </Row>
    </Container>
  )
}
