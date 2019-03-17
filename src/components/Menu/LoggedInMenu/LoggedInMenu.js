import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export default function LoggedInMenu() {
	return (
		<div>
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
				<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#generator">Generator</Nav.Link>
					</Nav>
					<Nav>
						<Nav.Link href="#account">Account</Nav.Link>
						<Nav.Link eventKey={2} href="#Logout">
							Logout
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
}
