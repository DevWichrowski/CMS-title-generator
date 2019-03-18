import React from 'react';
import { Button, Jumbotron } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './GuestDashboard.scss';

export default function GuestDashboard() {
	return (
		<div className="guest-dashboard">
			<Jumbotron>
				<h1>CMS Title generator</h1>
				<p>To use this generator please Login or If you don't have account please Signup.</p>
				<p>
					<NavLink to="/login">
						<Button variant="danger">Login</Button>
					</NavLink>
					<NavLink to="signup">
						<Button variant="danger">Signup</Button>
					</NavLink>
				</p>
			</Jumbotron>
		</div>
	);
}
