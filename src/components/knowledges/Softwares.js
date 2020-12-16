import React, {Component} from 'react';
import ProgressBar from "./ProgressBar";

class Softwares extends Component {

    state = {
        softwares: [
            {id: 1, value: "Linux", xp: 1.25},
            {id: 2, value: "PHPStorm", xp: 1},
            {id: 3, value: "Workbench", xp: 1},
            {id: 4, value: "Adobe XD", xp: 0.5},
            {id: 5, value: "Prestashop", xp: 0.3},
            {id: 6, value: "Apache2", xp: 0.2},
        ]
    };

    render() {
        let {softwares} = this.state;

        return (
            <div className="software">
                <ProgressBar
                    languages={softwares}
                    classname="softwareDisplay"
                    title="outils & logiciels"
                />
            </div>
        );
    }
}

export default Softwares;