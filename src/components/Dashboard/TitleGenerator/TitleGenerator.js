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
			separator: '\n'
		};
	}

	parseStringToArray = (urlString) => {
		return urlString.split(this.state.separator);
	};

	saveTitle = (event) => {
		this.setState({ titlesArray: this.parseStringToArray(event.target.value) });
		console.log('titleArray', this.state.titlesArray);
	};

	saveUrls = (event) => {
		this.setState({ urlsArray: this.parseStringToArray(event.target.value) });
		console.log('urlsArray', this.state.urlsArray);
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
				<Button className="generate-button" variant="danger">
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
