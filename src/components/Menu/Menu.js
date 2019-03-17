import React, { Component } from 'react'
import LoggedInMenu from './LoggedInMenu/LoggedInMenu';
import GuestMenu from './GuestMenu/GuestMenu';

export default class Menu extends Component {
  constructor(props){
    super(props);

    this.state = {
      loggedIn: false,
    };
  }
  render() {
    return (
      <div>
        {this.state.loggedIn ? <LoggedInMenu /> : <GuestMenu />}
      </div>
    )
  }
}
