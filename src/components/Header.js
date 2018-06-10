import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export class Header extends React.Component {
  onClick = () => {
    this.props.startLogout();
  };
  render() {
    return (
      <header>
      <h1>Expensify</h1>
      <NavLink to="/dashboard" activeClassName="is-active">Dashboard </NavLink>
      <NavLink to="/create" activeClassName="is-active">Create new expense </NavLink>      
      <button onClick={this.onClick}>Logout</button>
    </header>
    );
  };
};

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);