import React from 'react';
import {MdPrint} from 'react-icons/md';
import {IoGameController} from 'react-icons/io5'
import {MdWork} from 'react-icons/md'

const Hobbies = () => {
    return (
        <div className="hobbies">
            <h3>Centres d'intérêt</h3>
            <ul>
                <li className="hobby"><MdWork/> Voyages</li>
                <li className="hobby"><MdPrint/> Impression 3D</li>
                <li className="hobby"><IoGameController/> Jeux de rôle (Donjons & Dragons)</li>
            </ul>
        </div>
    );
};

export default Hobbies;