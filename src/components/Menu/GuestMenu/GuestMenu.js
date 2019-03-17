import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default function GuestMenu() {
	return (
		<div>
			<div>
				<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
					<NavLink to="/">
						<Navbar.Brand>CMS Title generator</Navbar.Brand>
					</NavLink>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="mr-auto">
							<NavLink to="/" className="nav-link">
								Home
							</NavLink>

							<NavLink to="/generator" className="nav-link" disabled>
								Generator
							</NavLink>
						</Nav>
						<Nav>
							<NavLink className="nav-link" to="/signup">
								Signup
							</NavLink>
							<NavLink className="nav-link" to="/login">
								Login
							</NavLink>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</div>
		</div>
	);
}
