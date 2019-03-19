import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './ResultModal.scss';

class ResultModal extends Component {
	constructor(props, context) {
		super(props);
	}

	render() {
		return (
			<div className="result-modal">
				<Modal show={this.props.showModal} onHide={this.props.handleModal}>
					<Modal.Header closeButton>
						<Modal.Title>Generated results</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<textarea className="custom-textarea" value={this.props.resultValue} readOnly/>
					</Modal.Body>
					{console.log(this.props)}
					<Modal.Footer>
						<Button variant="secondary" onClick={this.props.handleModal}>
							Close
						</Button>
						<Button variant="danger">Copy to clipboard</Button>
					</Modal.Footer>
				</Modal>
			</div>
		);
	}
}

export default ResultModal;
