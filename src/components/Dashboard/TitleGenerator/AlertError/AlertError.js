import React from 'react';
import { Alert } from 'react-bootstrap';
import './AlertError.scss'

export default function AlertError() {
	return (
		<div className="alert-error">
			<Alert variant="danger">Something goes wrong</Alert>
		</div>
	);
}
