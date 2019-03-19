import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';

class ResultModal extends Component {
	constructor(props, context) {
		super(props);
	}

	render() {
		return (
			<div>
				<Modal show={this.props.showModal} onHide={this.props.handleModal}>
					<Modal.Header closeButton>
						<Modal.Title>Generated results</Modal.Title>
					</Modal.Header>
					<Modal.Body></Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={this.props.handleModal}>
							Close
						</Button>
						<Button variant="danger">
							Copy to clipboard
						</Button>
					</Modal.Footer>
				</Modal>
			</div>
		);
	}
}

export default ResultModal;
