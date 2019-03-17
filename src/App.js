import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter, Route } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import Dashboard from './components/Dashboard/Dashboard';
import Signup from './components/Signup/Signup';
import LoginForm from './components/LoginForm/LoginForm';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Menu />
					<Route exact path="/" component={Dashboard} />
					<Route path="/signup" component={Signup} />
					<Route path="/login" component={LoginForm} />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
