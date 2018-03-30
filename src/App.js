// React Imports
import React, { Component } from 'react';

// window.scrollTo(x,y) on click to scroll to a position
import './App.css';

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
    render() {
        return (
            <div>
                <input type="checkbox" id="toggle" />
                <div id="side-bar">
                    <div id="close" onClick={() => {
                        console.log('hi');
                    }}><strong>X</strong></div>
                    <div id="project">
                        <div className="tab" onClick={() => {
                            document.getElementById('toggle').checked = !document.getElementById('toggle').checked;
                        }}>PROJECTS</div>
                        <img />
                        <h3><strong>Order</strong></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        <a href="http://159.89.50.120/#/" 
                            target="_blank"
                            rel="noopener noreferrer"
                        >Click here</a>
                    </div>
                    <label><strong>Technologies Used:</strong></label>
                    <ul>
                        <li>React.js</li>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>Sass</li>
                        <li>Gulp</li>
                    </ul>
                </div>
            </div>
        )
    }
};

export default App;