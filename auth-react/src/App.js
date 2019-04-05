import React, { Component } from 'react';
//import logo from './logo.svg';
import {NavLink, Route} from 'react-router-dom';
import Login from './Login';
//import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <div className="login">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/sign-up">Signup</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/logout">Logout</NavLink>
          </div>
        </header>

        <main>
          <Route path="/login" component={Login}/>
        </main>
      </div>
    );
  }
}

export default App;
