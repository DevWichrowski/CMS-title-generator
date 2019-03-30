import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter, Route } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import TitleGenerator from './components/TitleGenerator/TitleGenerator';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Menu />
					<Route exact path="/" component={TitleGenerator} />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
