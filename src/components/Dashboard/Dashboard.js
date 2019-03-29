import React, { Component } from 'react'
import TitleGenerator from './TitleGenerator/TitleGenerator';
import { connect } from 'react-redux';
import { getLoginStatus } from '../../store/selectors/users.selectors';

class Dashboard extends Component {
    constructor(props){
        super(props);
    }

  render() {
    return (
      <div className="dashboard">
        <TitleGenerator />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
	loggedIn: getLoginStatus(state)
});

export default connect(mapStateToProps, null)(Dashboard);