import React from 'react';
import { Alert } from 'react-bootstrap';
import './AlertSuccess.scss'

export default function AlertSuccess() {
	return (
		<div className="alert-success">
			<Alert variant="success">Generated successful</Alert>
		</div>
	);
}
