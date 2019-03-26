import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLoginStatus } from '../../../store/selectors/users.selectors';
import './TitleGenerator.scss';
import { Button } from 'react-bootstrap';
import AlertSuccess from './AlertSuccess/AlertSuccess';
import AlertError from './AlertError/AlertError';
import ButtonGenerate from './ButtonGenerate/ButtonGenerate';
import ResultModal from './ResultModal/ResultModal';

class TitleGenerator extends Component {
	constructor(props) {
		super(props);

		this.state = {
			titlesArray: [],
			urlsArray: [],
			separator: '[\\n]+',
			generatedCodePHP: '',
			alertSuccess: false,
			alertError: false,
			textareaResult: null,
			showResultModal: false
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

	handleShowModal = () => {
		this.setState({ showResultModal: !this.state.showResultModal });

		if(this.state.showResultModal === false){
			this.setState({titlesArray: [], urlsArray: []});
		}
	};

	generateCodePHP = (titles, urls) => {
		let result = '';

		titles.map((title, index) => {
			result += `<?php\n`;
			result += `	if(${urls[index]} === {$_SERVER['HTTP_HOST']} . {$_SERVER['REQUEST_URI']}){\n`;
			result += `	   echo '<title>${title}</title>'\n`;
			result += `	  }\n`;
			result += `?>\n`;
			result += `\n`;
			this.setState({ textareaResult: result });
			// console.log('qwe', this.state.textareaResult);
			return true;
		});
		return result;
	};

	handleAlertSuccess = () => {
		this.setState({ alertSuccess: true });
		setTimeout(() => this.setState({ alertSuccess: false }), 3000);
	};

	handleAlertError = () => {
		this.setState({ alertError: true });
		setTimeout(() => this.setState({ alertError: false }), 3000);
	};

	submitGenerate = () => {
		if (this.state.titlesArray.length > 0 && this.state.urlsArray.length > 0) {
			this.setState({ generatedCodePHP: this.generateCodePHP(this.state.titlesArray, this.state.urlsArray) });
			this.handleAlertSuccess();
			this.handleShowModal();
			this.setState({titlesArray: [], urlsArray: []})
		} else {
			this.handleAlertError();
		}
	};

	render() {
		return (
			<div className="title-generator">
				{this.state.alertSuccess ? <AlertSuccess /> : null}
				{this.state.alertError ? <AlertError /> : null}

				<h1>Generator</h1>
				<hr />
				<div className="titles-textarea">
					<p>Enter all titles below</p>
					<textarea className="custom-textarea" onChange={this.saveTitle} value={this.state.titlesArray}/>
				</div>
				<div className="ulrs-textarea">
					<p>Enter all urls below</p>
					<textarea className="custom-textarea" onChange={this.saveUrls} value={this.state.urlsArray}/>
				</div>
				<ResultModal
					handleModal={this.handleShowModal}
					showModal={this.state.showResultModal}
					resultValue={this.state.textareaResult}
				/>
				<Button className="generate-button" variant="danger" onClick={() => this.submitGenerate()}>
					Generate
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
