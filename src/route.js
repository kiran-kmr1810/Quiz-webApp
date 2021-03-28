import React from 'react';
import { BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import App from './App';
import shome from './student/shome';
import fhome from './faculty/fhome';
import Createquiz from './faculty/createquiz';
import Navbar from './components/navbar'

function path(){
    return (
        <Router>
            <div>
            <Navbar/>
                <Switch>
                <Route path="/" exact component = {App} />
                <Route path="/shome" exact component = {shome} />
                <Route path="/fhome" exact component = {fhome} />
                <Route path="/createquiz" exact component = {Createquiz} />
                <Route path="/quiz" exact component = {fhome} />
                <Route path="/result" exact component = {fhome} />
                </Switch>
            </div>
        </Router>
    );
}

export default path;