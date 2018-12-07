import React from 'react';
import { Link, Redirect } from "react-router-dom";

import './side-nav.scss';
import store from '../../redux/store';
import { clearState } from '../../redux/actions';

class SideNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signOut: false
    }
    this.handleSignOut = this.handleSignOut.bind(this);    
  }

  handleSignOut() {
    store.dispatch(clearState());
    this.setState({ signOut: true });
  }

  render() {
    if(this.state.signOut) return <Redirect to={'/login'}/>
    return (
      <div className="side-nav-container">
        <ul className="nav-link-container">
          <div className="nav-title-container">
            <h4 className="nav-title">Site Navigation</h4>
          </div>
          <li className="nav-link">
            <Link className="nav-link" to='/dashboard'>Dashboard</Link>
          </li>
          <li className="nav-link">
            <Link className="nav-link" to='/my-store'>My Store</Link>
          </li>
          <li className="nav-link">
            <Link className="nav-link" to='/feed'>Feed</Link>
          </li>
          <li className="nav-link">
            <Link className="nav-link" to='/account-settings'>Account Settings</Link>
          </li>
          <li className="nav-link" onClick={ this.handleSignOut }>
            Sign Out
          </li>
        </ul>
      </div>
    )
  }
}

export default SideNav;