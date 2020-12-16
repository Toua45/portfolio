import React from 'react';
import Navigation from "../components/Navigation";
import Languages from "../components/knowledges/Languages";
import OtherSkills from "../components/knowledges/OtherSkills";
import Hobbies from "../components/knowledges/Hobbies";
import Softwares from "../components/knowledges/Softwares";

const Skills = () => {
    return (
        <div className="skills">
            <Navigation/>
            <div className="skillsContent">
                <Languages/>
                <Softwares/>
                <OtherSkills/>
                <Hobbies/>
            </div>
        </div>

    );
};

export default Skills;