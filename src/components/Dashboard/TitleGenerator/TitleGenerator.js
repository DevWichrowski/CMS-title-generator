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
				<div className="titles-textarea">
					<p>Enter all titles below</p>
					<textarea className="custom-textarea" />
				</div>
				<div className="ulrs-textarea">
					<p>Enter all urls below</p>
					<textarea className="custom-textarea" />
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	loggedIn: getLoginStatus(state)
});

export default connect(mapStateToProps, null)(TitleGenerator);
