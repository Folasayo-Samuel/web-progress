import { Container, Row } from 'react-bootstrap'
import { FaPencilAlt } from 'react-icons/fa'
import { BiWallet, BiSearch } from 'react-icons/bi'
import { MdSignalCellularAlt, MdOutlineAutorenew } from 'react-icons/md'
import { RiEdit2Line, RiFileEditLine } from 'react-icons/ri'
import classnames from 'classnames'

import style from './style.module.css'
import { NavLink, Route, Switch, useRouteMatch } from 'react-router-dom'
import Overview from './Overview'
import Wallet from './Wallet'
import Insurability from './Insurability'
import Claim from './Claim'
import Tracking from './Tracking'
import Renewal from './Renewal'
import Profile from './Profile'

export default function Dashboard() {
  const { url, path } = useRouteMatch()
  return (
    <Container
      fluid={true}
      className={classnames(style.Container, 'vw-100 vh-100 position-relative')}
    >
      <Row className="w-100 h-100 m-0">
        <nav
          id="navbar"
          className={classnames(
            style.Navbar,
            'col-md-3 col-lg-2 d-md-flex flex-column bg-white collapse px-0'
          )}
        >
          <figure className="d-flex flex-column align-items-center py-4 border-bottom gap-2">
            <div className={style.AvaterImageContainer}>
              <img
                src="/images/obama.jpg"
                alt="User Profile Image"
                className="img-fluid rounded-circle w-100 h-100"
              />
            </div>
            <figcaption>Barack Obama</figcaption>
            <div class={style.PrimaryTextColor}>My Profile</div>
          </figure>

          <div class={classnames(style.NavLinksContainer, 'mt-3')}>
            <h6 class="m-0 mb-3 ms-2 px-2">Menu</h6>
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
          </div>
          <button className="btn bg-theme d-block px-5 text-white m-auto">
            Logout
          </button>
        </nav>
        <div className="col-md-9 ms-sm-auto col-lg-10 py-3 px-md-4 d-flex flex-column gap-3">
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
