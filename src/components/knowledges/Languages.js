import React, {Component} from 'react';
import ProgressBar from "./ProgressBar";

class Languages extends Component {

    state = {
        languages: [
            {id: 1, value: "PHP", xp: 1.25},
            {id: 2, value: "CSS", xp: 1.25},
            {id: 3, value: "SCSS", xp: 1},
            {id: 4, value: "SQL", xp: 1.25},
            {id: 5, value: "Javascript", xp: 0.75},
        ],
        frameworks: [
            {id: 1, value: "Symphony", xp: 1},
            {id: 2, value: "Bootstrap", xp: 1},
            {id: 3, value: "Uikit", xp: 0.75},
            {id: 4, value: "React", xp: 0.25},
            {id: 5, value: "React Native", xp: 0.1},
        ],
    };

    render() {
        let {languages, frameworks} = this.state;

        return (
            <div className="languagesFrameworks">
                <ProgressBar
                    languages={languages}
                    classname="languageDisplay"
                    title="langages"
                />

                <ProgressBar
                    languages={frameworks}
                    classname="frameworkDisplay"
                    title="frameworks & bibliothèques"
                />

            </div>
        );
    }
}

export default Languages;