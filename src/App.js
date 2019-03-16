import React, { Component } from 'react';
import './App.scss';
import LoginForm from './components/LoginForm/LoginForm';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>Title generator</h1>
       <RegistrationForm />
      </div>
    );
  }
}

export default App;
