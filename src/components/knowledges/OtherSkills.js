import React from 'react';
import {FaCheckSquare} from 'react-icons/fa'

const OtherSkills = () => {
    return (
        <div className="otherSkills">
            <h3>Autres compétences</h3>
            <div className="list">
                <ul>
                    <li><FaCheckSquare/> Anglais</li>
                    <li><FaCheckSquare/> Git</li>
                    <li><FaCheckSquare/> Github</li>
                    <li><FaCheckSquare/> Méthode Agile</li>
                </ul>
            </div>
        </div>
    );
};

export default OtherSkills;