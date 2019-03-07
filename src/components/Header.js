import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.PNG'
import logo from '../../public/icons/website-icon.PNG'

class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      visible: false,
    }
  }

  handleClick = () => {
    this.setState({ visible: true }, () => {
      document.addEventListener('click', this.handleOutsideClick)
    })
  }

  handleOutsideClick = () => {
    this.setState({ visible: false }, () => {
      document.removeEventListener('click', this.handleOutsideClick)
    })
  }

  render() {
    const { visible } = this.state
    return (
      <header id="header">
        <div className="navbar">
          <div className="nav-content">
            <button
              className={`hamburger hamburger--collapse ${
                !visible ? '' : 'is-active'
              }`}
              onClick={this.handleClick}
            >
              <span style={{ marginTop: '10px' }} className="hamburger-box">
                <span className="hamburger-inner" />
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
            <strong>I am Eric Vere</strong>,<br /> developer, cat-dad, and music
            enthusiast.
          </h1>
          <div className={`link-cont ${visible}`}>
            <h3
              onClick={() => {
                document.getElementById('main').scrollIntoView(true)
                this.setState({ visible: false })
              }}
            >
              About Me
            </h3>
            <h3
              onClick={() => {
                document.getElementById('two').scrollIntoView(true)
                this.setState({ visible: false })
              }}
            >
              Projects
            </h3>
            <h3
              onClick={() => {
                document.getElementById('three').scrollIntoView(true)
                this.setState({ visible: false })
              }}
            >
              Contact Me
            </h3>
          </div>
        </div>
        <Footer />
      </header>
    )
  }
}

export default Header
