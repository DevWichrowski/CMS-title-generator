import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLoginStatus } from '../../store/selectors/users.selectors';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

class Menu extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
					<NavLink to="/">
						<Navbar.Brand>CMS Title generator</Navbar.Brand>
					</NavLink>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="mr-auto">
							<NavLink to="/title-generator" className="nav-link">
								Title generator
							</NavLink>
							<NavLink to="/description-generator" className="nav-link">
								Description generator
							</NavLink>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	loggedIn: getLoginStatus(state)
});

export default connect(mapStateToProps, null)(Menu);
