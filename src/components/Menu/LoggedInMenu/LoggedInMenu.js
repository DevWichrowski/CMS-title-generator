import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default function LoggedInMenu() {
	return (
		<div>
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
				<Navbar.Brand href="#home">CMS Title generator</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mr-auto">
						<NavLink to="/" className="nav-link">
							Home
						</NavLink>

						<NavLink to="/generator" className="nav-link">
							Generator
						</NavLink>
					</Nav>
					<Nav>
						<NavLink className="nav-link" to="/account">
							Account
						</NavLink>
						<Nav.Link className="nav-link">Logout</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
}
