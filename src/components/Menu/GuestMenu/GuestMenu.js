import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export default class GuestMenu extends Component {
	render() {
		return (
			<div>
				<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
					<Navbar.Brand href="#home">CMS Title Generator</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="mr-auto">
							<Nav.Link href="#home">Home</Nav.Link>
							<Nav.Link href="#generator" disabled>Generator</Nav.Link>
						</Nav>
						<Nav>
							<Nav.Link href="#signup">Signup</Nav.Link>
							<Nav.Link eventKey={2} href="#login">
								Login
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</div>
		);
	}
}
