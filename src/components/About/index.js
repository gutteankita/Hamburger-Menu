// Write your code here

import {Component} from 'react'
import './index.css'

class About extends Component {
  render() {
    return (
      <>
        <div className="about-section">
          <img
            src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
            alt="about"
          />
        </div>
        <div className="about-mobile-section">
          <img
            src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
            alt="about"
          />
        </div>
      </>
    )
  }
}

export default About
