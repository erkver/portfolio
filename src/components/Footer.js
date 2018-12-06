import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="https://twitter.com/ErkverWuzHur?lang=en" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                        <li><a href="https://github.com/erkver" className="icon fa-github"><span className="label">Github</span></a></li>
                        <li><a href="www.linkedin.com/in/eric-vere" className="icon fa-linkedin"><span className="label">Dribbble</span></a></li>
                        <li><a href="mailto:eric.c.vere@gmail.com" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
