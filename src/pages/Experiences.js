import React, {Fragment} from 'react';
import {FaAngleRight} from 'react-icons/fa';
import Navigation from "../components/Navigation";

const Experiences = () => {
    return (
        <Fragment>
            <div className="experience">
                <Navigation/>
                <div className="experienceContent">
                    {/*<div className="exp-1">*/}

                        <div className="dev-exp">
                            <h3>Expériences développement web</h3>
                            <h4>Aquapure France - Développeur web (stage)</h4>
                            <h5>Février 2020 - Juin 2020</h5>
                            <p><FaAngleRight/>Créer et mettre en place un module de devis sur Prestashop développé sous
                                Symfony 3</p>
                            <p><FaAngleRight/>Mettre en place un site web en local via Apache2 ou Xampp</p>
                            <br/>
                            <p>Technologies : PHP, Symfony, Javascript, AJAX, JSON, MYSQL</p>
                        </div>

                        <div className="other-exp">
                            <h3>Autres expériences</h3>
                            <h4>Leader Intérim - Consultant emploi</h4>
                            <h5>Janvier 2019 - Avril 2019</h5>
                            <p>Emploi, sourcing et formation :</p>
                            <p><FaAngleRight/>Accompagner mon réseau d’agences (agences du 45 et du
                                18) dans la mise en place de plan d’action</p>
                            <p><FaAngleRight/>Développer les partenariats avec les acteurs de l’emploi</p>
                            <p><FaAngleRight/>Créer des évènements de recrutement spécifiques</p>
                            <p><FaAngleRight/>Assurer le déploiement des outils au sein des agences
                                (tableau de pilotage)</p>
                            <br/>
                            <h4>Randstad Inhouse Services - Responsable de compte</h4>
                            <h5>Octobre 2014 - Janvier 2019</h5>
                            <p><FaAngleRight/>Responsable d’agences intérim hébergées au sein de sites
                                industriels agroalimentaires et logistiques</p>
                            <p><FaAngleRight/>Effectuer le recrutement, la gestion de la planification et du
                                sourcing (intégration, formation, polyvalence...)</p>
                            <p><FaAngleRight/>Piloter la structure (administratif, tableaux de bords...)</p>
                            <p><FaAngleRight/>Accompagner et conseiller les clients sur les sujets relatifs
                                aux ressources humaines</p>
                        </div>

                    {/*</div>*/}

                    <div className="formations">
                        <h3>Formations</h3>
                        <h4>Wild Code School - Orléans</h4>
                        <h5>Septembre 2019 - Février 2020</h5>
                        <p>Obtention du titre professionnel Développeur web & web mobile</p>
                        <br/>
                        <h4>IMC Randstad - Paris</h4>
                        <h5>Octobre 2014 - Septembre 2015</h5>
                        <p>Obtention de l’attestation de compétences Responsable de Compte Junior - Ressources
                            Humaines</p>
                        <br/>
                        <h4>CFSA Aftec - Orléans</h4>
                        <h5>Aout 2011 - Juin 2013</h5>
                        <p>Obtention du BTS Management des Unités Commerciales</p>
                    </div>

                </div>
            </div>
        </Fragment>
    );
};

export default Experiences;