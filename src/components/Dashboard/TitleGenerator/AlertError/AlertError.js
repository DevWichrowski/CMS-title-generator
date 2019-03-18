import React from 'react';
import { Alert } from 'react-bootstrap';

export default function AlertError() {
	return (
		<div>
			<Alert variant="danger">Something goes wrong</Alert>
		</div>
	);
}
