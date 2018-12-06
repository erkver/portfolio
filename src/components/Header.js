import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.png'

// const selected = {color: "white", transition: ".3s"};
class Header extends React.Component {
    render() {
        return <header id="header">
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
    }
}

export default Header
