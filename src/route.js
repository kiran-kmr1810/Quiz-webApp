import React,{useEffect} from 'react';
import { BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import App from './App';
import shome from './student/shome';
import fhome from './faculty/fhome';
import Createquiz from './faculty/createquiz';
import Navbar from './components/navbar'
import Attendquiz from './quizlogic/attendquiz';
import rough from './rough';
import About from './about';
import Admin from './admin/admin';
import Mark from './student/mark';


function Path(){
    useEffect(() => {
        document.title = "Quizzy"
      }, [])
    return (
        <Router>
            <div>
            <Navbar/>
                <Switch>
                <Route path="/" exact component = {App} />
                <Route path="/shome" exact component = {shome} />
                <Route path="/fhome" exact component = {fhome} />
                <Route path="/admin" exact component = {Admin} />
                <Route path="/createquiz" exact component = {Createquiz} />
                <Route path="/quiz" exact component = {Attendquiz} />
                <Route path="/result" exact component = {fhome} />
                <Route path="/rough" exact component = {rough} />
                <Route path="/about" exact component = {About} />
                <Route path="/mark" exact component = {Mark} />
                </Switch>
            </div>
        </Router>
    );
}

export default Path;