import React, { Component } from 'react';
import { Button, ToggleButton, ToggleButtonGroup, ButtonToolbar } from 'react-bootstrap';
import AlertSuccess from '../GeneratorTemplate/AlertSuccess/AlertSuccess';
import AlertError from '../GeneratorTemplate/AlertError/AlertError';
import ResultModal from '../GeneratorTemplate/ResultModal/ResultModal';
import './NoindexGenerator.scss';

class NoindexGenerator extends Component {
	constructor(props) {
		super(props);

		this.state = {
			urlsArray: [],
			separator: '\n',
			generatedCode: '',
			alertSuccess: false,
			alertError: false,
			showResultModal: false,
			languageMode: 'PHP',
			textareaResult: null,
			generateTypes: 'Noindex',
			nofollow: true
		};
	}

	parseStringToArray = (urlString) => {
		return urlString.split(this.state.separator);
	};

	saveUrls = (event) => {
		this.setState({ urlsArray: this.parseStringToArray(event.target.value) });
	};

	handleShowModal = () => {
		this.setState({ showResultModal: !this.state.showResultModal });

		if (this.state.showResultModal === false) {
			this.setState({ urlsArray: [] });
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
	};

	switchToNofollow = () => {
		this.setState({ nofollow: true });
	};

	switchToFollow = () => {
		this.setState({ nofollow: false });
	};

	generateCodePHP = (urls) => {
		let result = '';

		urls.map((url, index) => {
			result += `<?php\n`;
			result += `	if("${urls[index]}" == {$_SERVER['HTTP_HOST']} . {$_SERVER['REQUEST_URI']}){\n`;
			result += `	   echo '<meta name="robots" content="noindex, ${this.state.nofollow
				? 'nofollow'
				: 'follow'}" />'\n`;
			result += `	  }\n`;
			result += `?>\n`;
			result += `\n`;
			this.setState({ textareaResult: result });
			return true;
		});
		return result;
	};

	generateCodeSMARTY = (urls) => {
		let result = '';

		urls.map((url, index) => {
			result += `{if $smarty.server.REQUEST_URI eq "${urls}"} \n`;
			result += `	   echo '<meta name="robots" content="noindex, ${this.state.nofollow
				? 'nofollow'
				: 'follow'}" />'\n`;
			result += `{/if} \n`;
			result += `\n`;
			this.setState({ textareaResult: result });
			return true;
		});
		return result;
	};

	submitGenerate = () => {
		if (this.state.urlsArray.length > 0) {
			if (this.state.languageMode === 'PHP') {
				this.setState({
					generatedCode: this.generateCodePHP(this.state.urlsArray)
				});
				this.handleAlertSuccess();
				this.handleShowModal();
			} else {
				this.setState({
					generatedCode: this.generateCodeSMARTY(this.state.urlsArray)
				});
				this.handleAlertSuccess();
				this.handleShowModal();
			}
		} else {
			this.handleAlertError();
		}
	};

	saveResultToFile = () => {
		if (this.state.urlsArray.length > 0) {
			if (this.state.languageMode === 'PHP') {
				this.setState({
					generatedCode: this.generateCodePHP(this.state.urlsArray)
				});
				setTimeout(() => {
					this.handleAlertSuccess();
					const FileSaver = require('file-saver');
					const blob = new Blob([ ...this.state.generatedCode ], { type: 'text/plain;charset=utf-8' });
					FileSaver.saveAs(blob, 'PHP_titles.php');
				}, 1000);
			} else {
				this.setState({
					generatedCode: this.generateCodeSMARTY(this.state.urlsArray)
				});
				setTimeout(() => {
					this.handleAlertSuccess();
					const FileSaver = require('file-saver');
					const blob = new Blob([ ...this.state.generatedCode ], { type: 'text/plain;charset=utf-8' });
					FileSaver.saveAs(blob, 'Smarty_titles.php');
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
				<h1>{this.state.generateTypes} generator</h1>
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
							{this.state.javascriptVisibility ? (
								<ToggleButton
									value={3}
									variant="danger"
									onClick={() => this.handleLanduageMode('Javascript')}
									disabled
								>
									Javascript
								</ToggleButton>
							) : null}
						</ToggleButtonGroup>
					</ButtonToolbar>

					<ButtonToolbar>
						<ToggleButtonGroup type="radio" name="options" defaultValue={1}>
							<ToggleButton value={1} variant="danger" onClick={this.switchToNofollow}>
								Nofollow
							</ToggleButton>
							<ToggleButton value={2} variant="danger" onClick={this.switchToFollow}>
								Follow
							</ToggleButton>
						</ToggleButtonGroup>
					</ButtonToolbar>
				</div>
				<div className="ulrs-textarea">
					<p>Enter all urls below</p>
					<textarea className="urls-container" onChange={this.saveUrls} />
				</div>
				<ResultModal
					handleModal={this.handleShowModal}
					showModal={this.state.showResultModal}
					resultValue={this.state.textareaResult}
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

export default NoindexGenerator;
