import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLoginStatus } from '../../../store/selectors/users.selectors';
import './TitleGenerator.scss';

class TitleGenerator extends Component {
	render() {
		return (
			<div className="title-generator">
				<h1>Generator</h1>
        <hr />
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	loggedIn: getLoginStatus(state)
});

export default connect(mapStateToProps, null)(TitleGenerator);
