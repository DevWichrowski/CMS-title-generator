import React, { Component } from 'react';
import './LoginForm.scss';
import { Form, Button } from 'react-bootstrap';

export default class LoginForm extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="login-form">
				<h1>Login</h1>
				<Form>
					<Form.Group controlId="formBasicEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control type="email" placeholder="Enter email" />
						<Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
					</Form.Group>
					<Form.Group controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" placeholder="Password" />
					</Form.Group>
					<Button variant="danger" type="submit">
						Submit
					</Button>
				</Form>
			</div>
		);
	}
}
