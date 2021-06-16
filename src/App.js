import React from "react";
import './App.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'


export default function App() {
  return (
    <div className="App">
      <h1 className="title">GrottoGear</h1>

      <Router>
        <nav>
          <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link>
        </nav>

        <Switch>
          <Route exact path="/">
            <Home /> 
          </Route>
          <Route path="/about">
            <About /> 
          </Route>
          <Route path="/">
            <Contact /> 
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
