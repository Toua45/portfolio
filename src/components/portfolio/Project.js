import React, {Component} from 'react';
import {FaPlusCircle} from 'react-icons/fa';

class Project extends Component {
    state = {
        showInfo: false
    };

    handleInfo = () => {
        this.setState({
            showInfo: !this.state.showInfo
        })
    };

    render() {
        let {name, languagesIcons, source, info, technology, features, other, picture} = this.props.item;

        return (
            <div className="project">
                <div className="icons">
                    {languagesIcons.map((icon) => {
                        return (
                            <i className={icon} key={icon}/>
                        )
                    })}
                </div>
                <h3>{name}</h3>
                <img src={picture} alt="" onClick={this.handleInfo}/>
                <span className="infos" onClick={this.handleInfo}>
                    <FaPlusCircle/>
                </span>

                {
                    this.state.showInfo && (
                        <div className="showInfos">
                            <div className="infosContent">
                                <div className="head">
                                    <h2>{name}</h2>
                                    <div className="sourceCode">
                                        <a href={source} rel="noopener noreferrer" className="button" target="_blank">
                                            Code source
                                        </a>
                                    </div>
                                </div>
                                <p className="text">{info}</p>
                                <p className="text">{technology}</p>
                                <p className="text">{features}</p>
                                <p className="text">{other}</p>
                                <div className="button return" onClick={this.handleInfo}>Retour</div>
                            </div>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default Project;