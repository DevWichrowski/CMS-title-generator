import React, { Component } from 'react'
import TitleGenerator from './TitleGenerator/TitleGenerator';
import GuestDashboard from './GuestDashboard/GuestDashboard';

export default class Dashboard extends Component {
    constructor(props){
        super(props);

        this.state ={
            loggedIn: true,
        }
    }

  render() {
    return (
      <div className="dashboard">
        {this.state.loggedIn ? <TitleGenerator /> : <GuestDashboard />}
      </div>
    )
  }
}
