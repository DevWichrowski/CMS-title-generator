import React, { Component } from 'react'
import TitleGenerator from './TitleGenerator/TitleGenerator';
import GuestDashboard from './GuestDashboard/GuestDashboard';
import { connect } from 'react-redux';
import { getLoginStatus } from '../../store/selectors/users.selectors';

class Dashboard extends Component {
    constructor(props){
        super(props);

        this.state ={
            loggedIn: true,
        }
    }

  render() {
    return (
      <div className="dashboard">
        {this.props.loggedIn ? <TitleGenerator /> : <GuestDashboard />}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
	loggedIn: getLoginStatus(state)
});

export default connect(mapStateToProps, null)(Dashboard);