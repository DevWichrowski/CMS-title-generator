import React, { Component } from 'react';
import './GeneratorTemplate.scss';
import { Button, ToggleButton, ToggleButtonGroup, ButtonToolbar } from 'react-bootstrap';
import AlertSuccess from './AlertSuccess/AlertSuccess';
import AlertError from './AlertError/AlertError';
import ResultModal from './ResultModal/ResultModal';

export default class GeneratorTemplate extends Component {
	constructor(props) {
		super(props);

		this.state = {
            titlesArray: [],
			urlsArray: [],
			separator: '\n',
			generatedCode: '',
			alertSuccess: false,
            alertError: false,
            showResultModal: false,
			languageMode: 'PHP',
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

		if (this.state.showResultModal === false) {
			this.setState({ titlesArray: [], urlsArray: [] });
		}
	};

	handleAlertSuccess = () => {
		this.setState({ alertSuccess: true });
		setTimeout(() => this.setState({ alertSuccess: false }), 3000);
	};

	handleAlertError = () => {
		this.setState({ alertError: true });
		setTimeout(() => this.setState({ alertError: false }), 3000);
	};

	handleLanduageMode = (language) => {
		this.setState({ languageMode: language });
		console.log(`Switched to: ${language}`);
	};

	submitGenerate = () => {
		if (this.state.titlesArray.length > 0 && this.state.urlsArray.length > 0) {
			if (this.state.languageMode === 'PHP') {
				this.setState({ generatedCode: this.props.generateCodePHP(this.state.titlesArray, this.state.urlsArray) });
				this.handleAlertSuccess();
				this.handleShowModal();
			} else if (this.state.languageMode === 'SMARTY') {
				this.setState({
					generatedCode: this.props.generateCodeSMARTY(this.state.titlesArray, this.state.urlsArray)
				});
				this.handleAlertSuccess();
				this.handleShowModal();
			} else {
				this.setState({
					generatedCode: this.props.generateCodeJS(this.state.titlesArray, this.state.urlsArray)
				});
				this.handleAlertSuccess();
				this.handleShowModal();
			}
		} else {
			this.handleAlertError();
		}
	};

	saveResultToFile = () => {
		if (this.state.titlesArray.length > 0 && this.state.urlsArray.length > 0) {
			if (this.state.languageMode === 'PHP') {
				this.setState({ generatedCode: this.props.generateCodePHP(this.state.titlesArray, this.state.urlsArray) });
				setTimeout(() => {
					this.handleAlertSuccess();
					const FileSaver = require('file-saver');
					const blob = new Blob([ ...this.state.generatedCode ], { type: 'text/plain;charset=utf-8' });
					FileSaver.saveAs(blob, 'PHP_titles.php');
				}, 1000);
			} else if (this.state.languageMode === 'SMARTY') {
				this.setState({
					generatedCode: this.props.generateCodeSMARTY(this.state.titlesArray, this.state.urlsArray)
				});
				setTimeout(() => {
					this.handleAlertSuccess();
					const FileSaver = require('file-saver');
					const blob = new Blob([ ...this.state.generatedCode ], { type: 'text/plain;charset=utf-8' });
					FileSaver.saveAs(blob, 'Smarty_titles.php');
				}, 1000);
			} else {
				this.setState({
					generatedCode: this.props.generateCodeJS(this.state.titlesArray, this.state.urlsArray)
				});
				setTimeout(() => {
					this.handleAlertSuccess();
					const FileSaver = require('file-saver');
					const blob = new Blob([ ...this.state.generatedCode ], { type: 'text/plain;charset=utf-8' });
					FileSaver.saveAs(blob, 'Javascript_titles.js');
				}, 1000);
			}
		} else {
			this.handleAlertError();
		}
	};

	render() {
		return (
			<div className="generator-template">
				{this.state.alertSuccess ? <AlertSuccess /> : null}
				{this.state.alertError ? <AlertError /> : null}

				<h1>Title generator</h1>
				<hr />

				<div className="language-mode">
					<p>You code will be generated in: {this.state.languageMode}</p>
					<ButtonToolbar>
						<ToggleButtonGroup type="radio" name="options" defaultValue={1}>
							<ToggleButton value={1} variant="danger" onClick={() => this.handleLanduageMode('PHP')}>
								PHP
							</ToggleButton>
							<ToggleButton value={2} variant="danger" onClick={() => this.handleLanduageMode('SMARTY')}>
								SMARTY
							</ToggleButton>
							{this.props.javascriptVisibility ? (
								<ToggleButton
									value={3}
									variant="danger"
									onClick={() => this.handleLanduageMode('Javascript')}
								>
									Javascript
								</ToggleButton>
							) : null}
						</ToggleButtonGroup>
					</ButtonToolbar>
				</div>

				<div className="titles-textarea">
					<p>Enter all titles below</p>
					<textarea className="custom-textarea" onChange={this.saveTitle} />
				</div>
				<div className="ulrs-textarea">
					<p>Enter all urls below</p>
					<textarea className="custom-textarea" onChange={this.saveUrls} />
				</div>
				<ResultModal
					handleModal={this.handleShowModal}
					showModal={this.state.showResultModal}
					resultValue={this.props.textareaResult}
				/>
				<Button className="generate-button" variant="danger" onClick={() => this.submitGenerate()}>
					Generate
				</Button>
				<Button className="generate-button" variant="danger" onClick={() => this.saveResultToFile()}>
					Generate to file
				</Button>
			</div>
		);
	}
}
