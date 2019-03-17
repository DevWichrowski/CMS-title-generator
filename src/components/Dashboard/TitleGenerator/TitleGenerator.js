import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getLoginStatus } from '../../../store/selectors/users.selectors';

class TitleGenerator extends Component {
  render() {
    return (
      <div>
        <h1>generator</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
	loggedIn: getLoginStatus(state)
});

export default connect(mapStateToProps, null)(TitleGenerator)