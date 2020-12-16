import React, {Component} from 'react';
import {portfolioData} from '../../data/portfolioData'
import Project from "./Project";

class ProjectList extends Component {
    state = {
        projects: portfolioData,
        radios: [
            {id: 1, value: "php"},
            {id: 2, value: "javascript"}
        ],
        selectedRadio: "php",
    };

    handleRadio = (event) => {
        let radio = event.target.value;
        this.setState({selectedRadio: radio});
    };

    render() {

        const {projects, radios, selectedRadio} = this.state;

        const showProjectsByFilter = (projects) => {
            if (window.innerWidth >= 520) {
                let filteredProjects = projects.filter((item) => item.languages.includes(selectedRadio));
                return filteredProjects.map((item) => {
                    return (
                        <Project
                            key={item.id}
                            item={item}
                        />
                    )
                })
            } else {
                return projects.map((item) => {
                    return (
                        <Project
                            key={item.id}
                            item={item}
                        />
                    )
                })
            }
        };

        return (
            <div className="portfolioContent">
                <ul className="radioDisplay">
                    {
                        radios.map((radio) => {
                            return (
                                <li key={radio.id}>
                                    <input
                                        type="radio"
                                        name="radio"
                                        checked={radio.value === selectedRadio}
                                        value={radio.value}
                                        id={radio.value}
                                        onChange={this.handleRadio}
                                    />
                                    <label htmlFor={radio.value}>{radio.value}</label>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className="projects">
                    {
                        showProjectsByFilter(projects)
                    }
                </div>
            </div>
        );
    }
}

export default ProjectList;