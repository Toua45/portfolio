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
                <Route path="/" exact component={Home}/>
                <Route path="/skills" component={Skills}/>
                <Route path="/experiences" component={Experiences}/>
                <Route path="/projects" component={Portfolio}/>
                <Route path="/contact" component={Contact}/>
                <Route component={Error}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
