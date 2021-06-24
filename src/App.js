import React, { Component } from "react";
import './App.css';
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignIn from "./pages/SignIn";
import { BrowserRouter as Router, Route } from 'react-router-dom'


class App extends Component {

  state = {

  }

  login = (username, password) => {
    return fetch('http://localhost:9000/login', {
      menthod: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        password
      })
    })
      .then(response => response.json())
      .then(response => {
        if (response.error) {
          alert(response.error)
        }
        else {
          // alert(response.username)
          this.setState({
            user: response
          })
        }
      })
  }

  render() {
    return (
      <Router>
      <div className="App">
        <Route path="/" exact render={(props) => <SignIn {...props} /> } />
        <Route path="/home" exact render={(props) => <Home {...props} /> } />
      </div>
      </Router>
    );
  }
}

export default App;
