import React from 'react';
import {NavLink} from "react-router-dom";
import {FaHome} from 'react-icons/fa';

const Error = () => {
    return (
        <div className="error">
            <div className="errorContent">
                <div className="errorText">
                    <h3>Désolé cette page n'existe pas !</h3>
                    <NavLink exact to="/portfolio/">
                        <FaHome/>
                        <span> Acceuil</span>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Error;