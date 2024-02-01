// Write your code here

import {Component} from 'react'
import './index.css'

class Home extends Component {
  render() {
    return (
      <>
        <div className="home-section">
          <img
            src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
            alt="home"
            className="home-img"
          />
        </div>
        <div className="home-mobile-section">
          <img
            src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
            alt="home"
            className="home-img"
          />
        </div>
      </>
    )
  }
}

export default Home
