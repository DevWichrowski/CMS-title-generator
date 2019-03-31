import React, { Component } from 'react';
import './Menu.scss';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import AuthorBox from './AuthorBox/AuthorBox';

class Menu extends Component {
	constructor(props) {
		super(props);

		this.state = {
			authorBoxVisible: false
		};
	}

	closeAuthorbox = () => this.setState({ authorBoxVisible: false });

	openAuthorbox = () => this.setState({ authorBoxVisible: true });

	render() {
		return (
			<div className="menu-main">
				<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
					<NavLink to="/">
						<Navbar.Brand>CMS Title generator</Navbar.Brand>
					</NavLink>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="mr-auto">
							<NavLink to="/" className="nav-link">
								Title generator
							</NavLink>
							<NavLink to="/description-generator" className="nav-link">
								Description generator
							</NavLink>
							<NavLink to="/noindex-generator" className="nav-link">
								Noindex generator
							</NavLink>
							<NavLink to="/noindex-generator" className="nav-link author" onClick={this.openAuthorbox}>
								Author
							</NavLink>
						</Nav>
					</Navbar.Collapse>
					<AuthorBox authorboxVisibility={this.state.authorBoxVisible} handleClose={this.closeAuthorbox} />
				</Navbar>
			</div>
		);
	}
}

export default Menu;
