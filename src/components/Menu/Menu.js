import React, { Component } from 'react'
import LoggedInMenu from './LoggedInMenu/LoggedInMenu';
import GuestMenu from './GuestMenu/GuestMenu';
import { connect } from 'react-redux';
import { getLoginStatus } from '../../store/selectors/users.selectors';

class Menu extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.loggedIn ? <LoggedInMenu /> : <GuestMenu />}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
	loggedIn: getLoginStatus(state)
});

export default connect(mapStateToProps, null)(Menu);