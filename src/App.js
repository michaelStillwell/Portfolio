// React Imports
import React, { Component } from 'react';
// window.scrollTo(x,y) on click to scroll to a position
import './App.css';

import GitHubLogo from './Assets/GitHub-Mark-64px.png';
import LinkedInLogo from './Assets/Linkedin.svg';
import ReactLogo from './Assets/react-logo.png';
import ReduxLogo from './Assets/ReduxLogo.png';
import NodeLogo from './Assets/logo_js.svg';
import PostLogo from './Assets/PostgreSQL.png';
import ElectronLogo from './Assets/electron_logo.svg';
import HTMLLogo from './Assets/html_logo.png';
import CSSLogo from './Assets/css_logo.svg';
import SassLogo from './Assets/sass_logo.png';
import JSLogo from './Assets/javascript_logo.png';
import GMLLogo from './Assets/gml_logo.png';


// <div>

//     <div id="body">
//         <h3><i>Fullstack Web Developer</i></h3>
//         <h1><strong>MICHAEL STILLWELL</strong></h1>
//         <p>Connect With Me:</p>
//         <div>
//             <p>GitHub</p>
//             <p>LinkedIn</p>
//         </div>
//     </div>
// </div>

// <ul id="skills">
//     <li>JavaScript</li>
//     <li>HTML</li>
//     <li>CSS</li>
//     <li>Sass</li>
//     <li>React.js</li>
//     <li>Node.js</li>
//     <li>Express.js</li>
//     <li>GraphQL</li>
//     <li>PostgreSQL</li>
// </ul>

class App extends Component {
    constructor() {
        super();

        this.state = {
            skillsHeight: '0',
            skillsToggle: false,
        }
        this.toggleSkills = this.toggleSkills.bind(this);
    }

    toggleSkills() {
        if ( this.state.skillsHeight === '0') {
            this.setState({ skillsHeight: '100vh', skillsToggle: true });
        } else {
            this.setState({ skillsHeight: '0', skillsToggle: false });
        }
    }

    render() {
        console.log(this.state.skillsHeight)
        return (
            <div className="body">
                <div className="info">
                    <h3><i>Jr. Full-Stack Web Developer</i></h3>
                    <h1><strong>MICHAEL STILLWELL</strong></h1>
                    <div>
                        <a href="https://github.com/michaelStillwell" target="_blank"><img className="links" src={GitHubLogo} alt="GitHub"/></a>
                        <a href="https://linkedin.com/in/mstillwellwebdev/" target="_blank"><img className="links" src={LinkedInLogo} alt="LinkedIn"/></a>
                    </div>
                </div>

                <input type="checkbox" checked={this.state.skillsToggle} />
                <div className="skills-button" onClick={this.toggleSkills}><i>Skills</i></div>
                <div className="skills" style={{ height: this.state.skillsHeight }}>
                    <img src={JSLogo} alt="JavaScript"/>
                    <img src={HTMLLogo} alt="HTML"/>
                    <img src={CSSLogo} alt="CSS"/>
                    <img src={NodeLogo} alt="Node"/>
                    <img src={PostLogo} alt="PostgreSQL"/>
                    <img src={ElectronLogo} alt="Electron"/>
                    <img src={ReactLogo} alt="React"/>
                    <img src={ReduxLogo} alt="Redux"/>
                    <img src={SassLogo} alt="Sass"/>
                    <img src={GMLLogo} alt="GML"/>
                </div>
            </div>
        )
    }
};

export default App;