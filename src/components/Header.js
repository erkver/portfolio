import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.png'
import logo from '../../public/icons/website-icon.png'

const hamburgerStyles = {width: "25px", height: "25px"};

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: false
    }
  }
    render() {
      const { visible } = this.state;
      return (
        <header id="header">
          <div className="navbar">
          <div className="nav-content">
            <button
              // styles={hamburgerStyles}
              className={`hamburger hamburger--collapse ${!visible ? "" : "is-active"}`}
              onClick={() => this.setState({visible: !visible})}
            >
              <span style={{"marginTop": "10px"}} className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
            <div className="logo-tt">
              <p className="title">Eric Vere</p>
              <img className="my-logo" src={logo} alt="" />
            </div>
            </div>
          </div>
          <div className="inner">
            <img className="image avatar" src={avatar} alt="" />
            <h1>
              <strong>I am Eric Vere</strong>,<br /> developer, cat-dad, and music junkie.
            </h1>
            <div className="link-cont">
              <h3 onClick={() => document.getElementById("one").scrollIntoView(true)}>About Me</h3>
              <h3 onClick={() => document.getElementById("two").scrollIntoView(true)}>Projects</h3>
              <h3 onClick={() => document.getElementById("three").scrollIntoView(true)}>Contact Me</h3>
            </div>
          </div>
          <Footer />
        </header>
      )
    }
}

export default Header
