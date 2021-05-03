
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Projects from './Components/Projects/Projects';
import Blogs from './Components/Blogs/Blogs';
import Resume from './Components/Resume/Resume';
import ContactMe from './Components/ContactMe/ContactMe';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path ="/">
            <Home></Home>
        </Route>
        <Route path ="/projects">
          <Projects></Projects>
        </Route>
        <Route path ="/blogs">
          <Blogs></Blogs>
        </Route>
        <Route path ="/resume">
          <Resume></Resume>
        </Route>
        <Route path ="/contactMe">
          <ContactMe></ContactMe>
        </Route>        
      </Switch>
    </Router>
  );
}

export default App;
