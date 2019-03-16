import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

export default class RegistrationForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			username: '',
			password: ''
		};
	}

	saveEmail = (event) => {
		this.setState({ email: event.target.value });
		console.log(this.state.email);
	};

	saveUsername = (event) => {
		this.setState({ username: event.target.value });
		console.log(this.state.password);
	};

	savePassword = (event) => {
		this.setState({ password: event.target.value });
		console.log(this.state.password);
	};

	registerUser = () => {
		const data = { email: this.state.email, password: this.state.password };
		fetch('https://reqres.in/api/register', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		}).then((resp) => {
			console.log(resp);
		});
	};

	render() {
		return (
			<div className="login-form">
				<Form>
					<Form.Group controlId="formBasicEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control
							type="email"
							placeholder="Enter email"
							value={this.state.email}
							onChange={this.saveEmail}
						/>
						<Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
					</Form.Group>

					<Form.Group>
						<Form.Label>Email address</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter email"
							value={this.state.username}
							onChange={this.saveUsername}
						/>
						<Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
					</Form.Group>

					<Form.Group controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control
							type="password"
							placeholder="Password"
							value={this.state.password}
							onChange={this.savePassword}
						/>
					</Form.Group>

					<Form.Group controlId="formBasicChecbox">
						<Form.Check type="checkbox" label="Check me out" />
					</Form.Group>
					<Button variant="primary" onClick={this.registerUser}>
						Submit
					</Button>
				</Form>;
			</div>
		);
	}
}
