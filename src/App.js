import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import TitleGenerator from './components/TitleGenerator/TitleGenerator';
import DescriptionGenerator from './components/DescriptionGenerator/DescriptionGenerator';
import NoindexGenerator from './components/NoindexGenerator/NoindexGenerator';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Menu />
					<Route exact path="/" component={TitleGenerator} />
					<Route exact path="/description-generator" component={DescriptionGenerator} />
					<Route exact path="/noindex-generator" component={NoindexGenerator} />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
