import React from 'react';
import Navigation from "../components/Navigation";
import Typewriter from 'typewriter-effect';
import DownloadLink from "../components/DowloadLink";
import cv from '../media/CV_Toua_VA_developpeur_web.pdf';

const Home = () => {
    return (
        <div className="home">
            <Navigation/>
            <div className="homeContent">
                <div className="content">
                    <h1>Toua VA</h1>
                    <h2><Typewriter
                        options={{
                            strings: ['Développeur web',
                                'Web mobile',
                                'Back-end',
                                'Front-end'
                            ],
                            autoStart: true,
                            loop: true,
                        }}
                    /></h2>
                    <div className="pdf">
                        <DownloadLink src={cv}>Télécharger CV</DownloadLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;