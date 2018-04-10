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
            skillsShowing: [0, 1, 2],
            skills: [
                {src: JSLogo,       alt: 'JavaScript'},
                {src: HTMLLogo,     alt: 'HTML'},
                {src: CSSLogo,      alt: 'CSS'},
                {src: NodeLogo,     alt: 'Node'},
                {src: PostLogo,     alt: 'PostgreSQL'},
                {src: ElectronLogo, alt: 'Electron'},
                {src: ReactLogo,    alt:'React'},
                {src: ReduxLogo,    alt: 'Redux'},
                {src: SassLogo,     alt: 'Sass'},
                {src: GMLLogo,      alt: 'GML'}
            ],
            projectsHeight: '0',
            projectsWidth: '0',
            projectsToggle: false,
            projectsCurrent: 1,
            projects: [
                {title: 'Warehouse Management App', description: `
                A way for a company's warehouse maintain their current products, orders, stock, and pricing 
                of each of the products. With a view for both the owner to maintain employees and update their 
                information and for the employees in the field to create and track their current orders after 
                selecting from the products in the warehouse. This was a project insipired by a company my father 
                had worked with that had a very big problem with communication between the employees working in the 
                field and the ones fulfilling their orders.
                `, technologies: [
                    'JavaScript', 
                    'React JS', 
                    'Sass, SCSS',
                    'Redux', 
                    'Node JS', 
                    'Express', 
                    'PostgreSQL'
                ]},
                {title: 'chatOverflow', description: `
                A chat application focused on providing a way for developers to interact between each other.
                `, technologies: [
                    'JavaScript',
                    'Node JS',
                    'Socket IO',
                    'Hightlight JS',
                    'Material UI',
                ]}
            ]
        }
        this.toggleSkills = this.toggleSkills.bind(this);
        this.changeSkills = this.changeSkills.bind(this);
        this.toggleProjects = this.toggleProjects.bind(this);
        this.changeProjects = this.changeProjects.bind(this);
    }

    toggleSkills() {
        if ( this.state.skillsHeight === '0' ) {
            this.setState({ skillsHeight: '130px', skillsToggle: true });
        } else {
            this.setState({ skillsHeight: '0', skillsToggle: false });
        }
    }

    changeSkills() {
        let {skills, skillsShowing} = this.state, newSkills = skillsShowing;
        
        newSkills.shift();
        newSkills[1] >= 9
            ? newSkills.push(0)
            : newSkills.push(newSkills[1]+1);

        this.setState({ skillsShowing: newSkills });
    }

    toggleProjects() {
        if ( this.state.projectsHeight === '0' ) {
            this.setState({ projectsHeight: '100vh', projectsWidth: '50vw', projectsToggle: true });
        } else {
            this.setState({ projectsHeight: '0', projectsWidth: '0', projectsToggle: false });
        }
    }

    changeProjects() {
        if ( this.state.projectsCurrent + 1 >= this.state.projects.length ) {
            this.setState({ projectsCurrent: 0 });
        } else {
            this.setState({ projectsCurrent: this.state.projectsCurrent + 1 });
        }
    }

    render() {
        const {
            skillsHeight,
            skillsToggle,
            skills,
            skillsShowing,
            projectsHeight,
            projectsWidth,
            projectsToggle,
            projectsCurrent,
            projects
        } = this.state;

        return (
            <div className="body">
                <div className="info">
                    <h3>Full-Stack Web Developer</h3>
                    <h1>MICHAEL STILLWELL</h1>
                    <div className="contact">
                        <p>(210) 724-0779</p>
                        <p>michael.stillwell@hotmail.com</p>
                    </div>
                    <div className="links-container">
                        <a href="https://github.com/michaelStillwell" target="_blank"><img className="links" src={GitHubLogo} alt="GitHub"/></a>
                        <a href="https://linkedin.com/in/mstillwellwebdev/" target="_blank"><img className="links" src={LinkedInLogo} alt="LinkedIn"/></a>
                    </div>
                </div>

                <input id="skills-toggle" type="checkbox" checked={skillsToggle} />
                <div className="skills-button" onClick={this.toggleSkills}><i>Skills</i></div>
                <div className="skills" style={{ height: skillsHeight }}>
                    {skillsShowing.map((x, y) => (
                        <img id="skill" key={y} src={skills[x].src} alt={skills[x].alt} />
                    ))}
                    <button onClick={this.changeSkills}>&raquo;</button>
                </div>
                <input id="projects-toggle" type="checkbox" checked={projectsToggle} />
                {/* <div className="projects-button" onClick={this.toggleProjects}></div> */}
                <div className="projects" style={{ width: projectsWidth }}>
                    <h2>{projects[projectsCurrent].title}</h2>
                    <p>{projects[projectsCurrent].description}</p>
                    <label>Technologies Used:</label>
                    <ul>
                        {projects[projectsCurrent].technologies.map((x, y) => (
                            <li key={y}>{x}</li>
                        ))}
                    </ul>
                    <button onClick={this.changeProjects}>></button>
                </div>
            </div>
        )
    }
};

export default App;