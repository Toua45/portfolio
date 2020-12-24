import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Experiences from "./pages/Experiences";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import './styles/styles.scss';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/portfolio" exact component={Home}/>
                <Route path="/portfolio/skills" component={Skills}/>
                <Route path="/portfolio/experiences" component={Experiences}/>
                <Route path="/portfolio/projects" component={Portfolio}/>
                <Route path="/portfolio/contact" component={Contact}/>
                <Route component={Error}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
