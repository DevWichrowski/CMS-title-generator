import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import './Signup.scss';

export default class Signup extends Component {
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
	};

	saveUsername = (event) => {
		this.setState({ username: event.target.value });
	};

	savePassword = (event) => {
		this.setState({ password: event.target.value });
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
			<div className="signup">
			<h1>Signup</h1>
				<Form>
					<Form.Group controlId="formBasicEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control
							type="email"
							placeholder="Please enter email"
							value={this.state.email}
							onChange={this.saveEmail}
						/>
						<Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
					</Form.Group>

					<Form.Group>
						<Form.Label>Username</Form.Label>
						<Form.Control
							type="text"
							placeholder="Please enter username"
							value={this.state.username}
							onChange={this.saveUsername}
						/>
						<Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
					</Form.Group>

					<Form.Group controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control
							type="password"
							placeholder="Please enter password"
							value={this.state.password}
							onChange={this.savePassword}
						/>
					</Form.Group>


					<Form.Group controlId="formBasicPassword">
						<Form.Label></Form.Label>
						<Form.Control
							type="password"
							placeholder="Please repeat password"
							value={this.state.password}
							onChange={this.savePassword}
						/>
					</Form.Group>
					<Button variant="danger" onClick={this.registerUser}>
						Submit
					</Button>
				</Form>
			</div>
		);
	}
}
