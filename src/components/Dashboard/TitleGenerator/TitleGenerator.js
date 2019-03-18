import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLoginStatus } from '../../../store/selectors/users.selectors';
import './TitleGenerator.scss';
import { Button } from 'react-bootstrap';

class TitleGenerator extends Component {
	constructor(props) {
		super(props);

		this.state = {
			titlesArray: [],
			urlsArray: [],
			separator: '\n',
			generatedCodePHP: ''
		};
	}

	parseStringToArray = (urlString) => {
		return urlString.split(this.state.separator);
	};

	saveTitle = (event) => {
		this.setState({ titlesArray: this.parseStringToArray(event.target.value) });
	};

	saveUrls = (event) => {
		this.setState({ urlsArray: this.parseStringToArray(event.target.value) });
	};

	generateCodePHP = (titles, urls) => {
		let result = '';

		titles.map((title, index) => {
			result += `<?php\n`;
			result += `if(${urls[index]} === {$_SERVER['HTTP_HOST']} . {$_SERVER['REQUEST_URI']}){\n`;
			result += `echo '<title>${title}</title>'\n`;
			result += `} ?>\n`;
			return true;
		});
		return result;
	};

	submitGenerate = () => {
		this.setState({ generatedCodePHP: this.generateCodePHP(this.state.titlesArray, this.state.urlsArray) });
		console.log(this.state.generatedCodePHP);
	};

	render() {
		return (
			<div className="title-generator">
				<h1>Generator</h1>
				<hr />
				<div className="titles-textarea">
					<p>Enter all titles below</p>
					<textarea className="custom-textarea" onChange={this.saveTitle} />
				</div>
				<div className="ulrs-textarea">
					<p>Enter all urls below</p>
					<textarea className="custom-textarea" onChange={this.saveUrls} />
				</div>
				<Button className="generate-button" variant="danger" onClick={this.submitGenerate}>
					Generate and copy to clipboard
				</Button>
				<Button className="generate-button" variant="danger">
					Generate to file
				</Button>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	loggedIn: getLoginStatus(state)
});

export default connect(mapStateToProps, null)(TitleGenerator);
