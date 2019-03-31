import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './ResultModal.scss';

class ResultModal extends Component {
	constructor(props) {
		super(props);

		this.state = {
			copySuccess: ''
		};
	}

	copyToClipboard = (e) => {
		this.textArea.select();
		document.execCommand('copy');
		e.target.focus();
		this.setState({ copySuccess: 'Skopiowano do schowka!' });
		setTimeout(() => {
			this.setState({ copySuccess: '' });
		}, 2000);
	};

	render() {
		return (
			<div className="result-modal">
				<Modal show={this.props.showModal} onHide={this.props.handleModal}>
					<Modal.Header closeButton>
						<Modal.Title>Generated results</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<textarea
							value={this.props.resultValue}
							readOnly
							ref={(textarea) => (this.textArea = textarea)}
						/>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={this.props.handleModal}>
							Close
						</Button>
						<Button variant="danger" onClick={this.copyToClipboard}>
							Copy to clipboard
						</Button>
					</Modal.Footer>
				</Modal>
			</div>
		);
	}
}

export default ResultModal;
