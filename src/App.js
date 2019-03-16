import React, { Component } from 'react';
import './App.scss';
import LoginForm from './components/LoginForm/LoginForm';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import Menu from './components/Menu/Menu';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Menu />
       <RegistrationForm />
      </div>
    );
  }
}

export default App;
