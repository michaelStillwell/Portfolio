// React Imports
import React, { Component } from 'react';
// window.scrollTo(x,y) on click to scroll to a position
import './App.css';

import GitHubLogo from './Assets/GitHub-Mark-64px.png';
import LinkedInLogo from './Assets/Linkedin.svg';
import JSLogo from './Assets/javascript_logo.png';
import HTMLLogo from './Assets/html_logo.png';
import CSSLogo from './Assets/css_logo.svg';
import GraphQLLogo from './Assets/GraphQL_Logo.svg.png';
import NodeLogo from './Assets/logo_js.svg';
import PostLogo from './Assets/PostgreSQL.png';
import ElectronLogo from './Assets/electron_logo.svg';
import ReactLogo from './Assets/react-logo.png';
import ReduxLogo from './Assets/ReduxLogo.png';
import SassLogo from './Assets/sass_logo.png';
import GMLLogo from './Assets/gml_logo.png';

// <div>

// <div id="body">
// <h3><i>Fullstack Web Developer</i></h3>
// <h1><strong>MICHAEL STILLWELL</strong></h1>
// <p>Connect With Me:</p>
// <div>
// <p>GitHub</p>
// <p>LinkedIn</p>
// </div>
// </div>
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
            skills: [
                {src: JSLogo,       alt: 'JavaScript'},
                {src: HTMLLogo,     alt: 'HTML'},
                {src: CSSLogo,      alt: 'CSS'},
                {src: GraphQLLogo,  alt: 'GraphQL'},
                {src: NodeLogo,     alt: 'Node'},
                {src: PostLogo,     alt: 'PostgreSQL'},
                {src: ElectronLogo, alt: 'Electron'},
                {src: ReactLogo,    alt:'React'},
                {src: ReduxLogo,    alt: 'Redux'},
                {src: SassLogo,     alt: 'Sass'},
                {src: GMLLogo,      alt: 'GML'}
            ],
            projectsHeight: '0',
            projectsToggle: false,
            projectsCurrent: 0,
            projects: [
                {title: 'Warehouse Management App', description: `
                A way for a company's warehouse maintain their current products, orders, stock, and pricing 
                of each of the products. With a view for both the owner to maintain employees and update their 
                information and for the employees in the field to create and track their current orders after 
                selecting from the products in the warehouse. This was a project insipired by a company my father 
                had worked with that had a very big problem with communication between the employees working in the 
                field and the ones fulfilling their orders.
                `, technologies: [
                    'React JS', 
                    'Sass, SCSS',
                    'Redux', 
                    'Node JS', 
                    'Express', 
                    'PostgreSQL'
                ], link: 'http://159.89.50.120/#/', github: 'https://github.com/michaelStillwell/Personal-Project'},
                {title: 'chatOverflow', description: `
                A chat application focused on providing a way for developers to interact between each other.
                `, technologies: [
                    'Node JS',
                    'Socket IO',
                    'Hightlight JS',
                    'Material UI',
                ], link: 'https://chatoverflow.xyz', github: 'https://github.com/Slack-Team/slack-team'},
            ]
        }
        this.toggleProjects = this.toggleProjects.bind(this);
        this.changeProjects = this.changeProjects.bind(this);
    }

    // Potential usecase
    // changeSkills() {
    //     let {skills, skillsShowing} = this.state, newSkills = skillsShowing;
        
    //     newSkills.shift();
    //     newSkills[1] >= 9
    //         ? newSkills.push(0)
    //         : newSkills.push(newSkills[1]+1);

    //     this.setState({ skillsShowing: newSkills });
    // }

    toggleProjects() {
        if ( this.state.projectsHeight === '0' ) {
            this.setState({ projectsHeight: '50vh', projectsToggle: true });
        } else {
            this.setState({ projectsHeight: '0', projectsToggle: false });
        }
    }

    changeProjects(dir) {
        if ( dir === 'inc' ) {
            this.setState({ projectsCurrent: this.state.projectsCurrent + 1 });
        } else if ( dir === 'dec' ) {
            this.setState({ projectsCurrent: this.state.projectsCurrent - 1});
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
                    <div className="header">
                        <h3>Full-Stack Web Developer</h3>
                        <h1>MICHAEL STILLWELL</h1>
                        <div className="contact">
                            <p>(210) 724-0779</p>
                            <p>michael.stillwell@hotmail.com</p>
                        </div>
                    </div>
                    <div className="links-container">
                        <a href="https://github.com/michaelStillwell" target="_blank" rel="noopener noreferrer"><img className="links" src={GitHubLogo} alt="GitHub"/></a>
                        <a href="https://linkedin.com/in/mstillwellwebdev/" target="_blank" rel="noopener noreferrer"><img className="links" src={LinkedInLogo} alt="LinkedIn"/></a>
                    </div>
                </div>
                <div className="skills">
                    {skills.map((x, y) => <img id="skill" key={y} src={x.src} alt={x.alt} />)}
                </div>
                <input id="projects-toggle" type="checkbox" checked={projectsToggle} />
                <div className="projects-button" onClick={this.toggleProjects}></div>
                <div className="projects" style={{ height: projectsHeight }}>
                    <div className="projects-cycler">
                        {projectsCurrent !== 0 ? <a className="previous-button" onClick={() => this.changeProjects('dec')}>&lt;-- Prev Project</a> : false}
                        {projectsCurrent !== projects.length-1 ? <a className="next-button" onClick={() => this.changeProjects('inc')}>Next Project --></a> : false}
                    </div>
                    <h2>{projects[projectsCurrent].title}</h2>
                    <div>
                        {projects[projectsCurrent].github !== '' ? <a href={projects[projectsCurrent].github} target="_blank" rel="noopener noreferrer">-- GitHub Repository --</a> : false}
                    </div>
                    <p>{projects[projectsCurrent].description}</p>
                    <div>
                        {projects[projectsCurrent].link !== '' ? <a target="_blank" rel="noopener noreferrer" href={projects[projectsCurrent].link}>-- Go to Live Site --</a> : false}
                    </div>
                    <label>Technologies Used:</label>
                    <ul>
                        {projects[projectsCurrent].technologies.map((x, y) => (
                            <li key={y}>{x}</li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
};

export default App;