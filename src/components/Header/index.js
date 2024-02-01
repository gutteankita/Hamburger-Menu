import {Component} from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import Popup from 'reactjs-popup'

import './index.css'

class Header extends Component {
  render() {
    return (
      <div className="nav-header">
        <div className="header-section">
          <Link to="/">
            <img
              src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
              alt="website logo"
              className="web-logo"
            />
          </Link>

          <Popup
            modal
            trigger={
              <button
                className="hammer-icon-btn"
                type="button"
                data-testid="hamburgerIconButton"
              >
                <GiHamburgerMenu className="icon" size={24} />
              </button>
            }
            className="popup-content"
          >
            {close => (
              <div className="modal-container">
                <button
                  className="close-btn"
                  type="button"
                  data-testid="closeButton"
                  onClick={() => close()}
                >
                  <IoMdClose className="icon" size={24} />
                </button>

                <ul className="nav-links-list">
                  <li className="nav-link-item">
                    <Link className="nav-link" to="/" onClick={() => close()}>
                      <AiFillHome size={40} />
                      <p className="nav-link-content">Home</p>
                    </Link>
                  </li>
                  <li className="nav-link-item">
                    <Link
                      className="nav-link"
                      to="/about"
                      onClick={() => close()}
                    >
                      <BsInfoCircleFill size={40} />
                      <p className="nav-link-content">About</p>
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </Popup>
        </div>
        <hr className="seperator" />
      </div>
    )
  }
}

export default Header
