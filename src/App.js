// React Imports
import React, { Component } from 'react';
// window.scrollTo(x,y) on click to scroll to a position
import './App.css';

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
            slide: 0,
            logo: JSLogo
        }
    }

    render() {
        let logo = HTMLLogo;
        setTimeout(() => {
            if ( this.state.slide >= 4 ) {
                this.setState({ slide: 0 });
            } else {
                this.setState({ slide: this.state.slide + 1})
            }
        }, 1500);

        return (
            <div>
                <div className="body">
                    <h3><i>Jr. Full-Stack Web Developer</i></h3>
                    <h1>Michael Stillwell</h1>
                    {/* <img src={logo} className="slider" /> */}
                    <ul id="slides">
                        <li className="slide showing"><img src={JSLogo} alt="JavaScript"/></li>
                        <li className="slide"><img src={HTMLLogo} alt="HTML"/></li>
                        <li className="slide"><img src={CSSLogo} alt="CSS"/></li>
                        <li className="slide"><img src={ReactLogo} alt="React"/></li>
                    </ul>
                    {/* <img src={ReactLogo} alt="React"/>
                    <img src={ReduxLogo} alt="Redux"/>
                    <img src={NodeLogo} alt="Logo"/>
                    <img src={PostLogo} alt="PostgreSQL"/>
                    <img src={ElectronLogo} alt="Electron"/>
                    <img src={HTMLLogo} alt="HTML"/>
                    <img src={CSSLogo} alt="CSS"/>
                    <img src={SassLogo} alt="Sass"/>
                    <img src={JSLogo} alt="JavaScript"/>
                    <img src={GMLLogo} alt="GML"/> */}
                </div>
            </div>
        )
    }
};

export default App;