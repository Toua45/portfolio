import React from 'react';
import {NavLink} from "react-router-dom";
import {FaHome} from 'react-icons/fa';
import {FaImages} from 'react-icons/fa';
import {MdPermContactCalendar} from 'react-icons/md';
import {GiOpenBook} from 'react-icons/gi';
import {MdWork} from 'react-icons/md'
import {FaLinkedin} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';
import profile from '../media/profil.jpg'

const Navigation = () => {
    return (
        <div className="sidebar">
            <div className="identity">
                <div className="identityContent">
                    <img src={profile} alt="profile-pic"/>
                    <h3>Toua VA</h3>
                </div>
            </div>

            <div className="navigation">
                <ul>
                    <li>
                        <NavLink exact to="/">
                            <FaHome/>
                            <span>Accueil</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/skills">
                            <GiOpenBook/>
                            <span>Compétences</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/experiences">
                            <MdWork/>
                            <span>Expériences</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/projects">
                            <FaImages/>
                            <span>Projets</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/contact">
                            <MdPermContactCalendar/>
                            <span>Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className="socialNetwork">
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/toua-va/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin/>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/Toua45" target="_blank" rel="noopener noreferrer">
                            <FaGithub/>
                        </a>
                    </li>
                </ul>
                <div className="signature">
                    <p>Réalisé par Toua VA - 2020</p>
                </div>
            </div>

        </div>
    );
};

export default Navigation;