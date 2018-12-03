import React from 'react';
import { Link, Redirect } from "react-router-dom";

import './side-nav.scss';
import store from '../../redux/store';

class SideNav extends React.Component {
  constructor(props) {
    super(props);    
    this.state = {
      userStore: store.getState().myStore,
      storeLinkTitle: this.getStoreLinkTitle(),
      signOut: false      
    }
    this.handleSignOut = this.handleSignOut.bind(this);
  }

  getStoreLinkTitle() {
    if(store.getState().myStore.id) {      
      return 'My Store';
    } else {
      return 'Create Store';
    }
  }

  handleSignOut() { // this needs to be refactored.
    localStorage.removeItem('appState');
    this.setState({ signOut: true });
    return <Redirect to={'/login'}/>
  }

  render() {
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
            <Link className="nav-link" to='/my-store'>{ this.state.storeLinkTitle }</Link>
          </li>
          <li className="nav-link">
            <Link className="nav-link" to='/feed'>Feed</Link>
          </li>
          <li className="nav-link">
            <Link className="nav-link" to='/account-settings'>Account Settings</Link>
          </li>
          <li className="nav-link" onClick={ this.handleSignOut }>
            Sign Out
            { this.state.signOut && this.handleSignOut() } 
          </li>
        </ul>
      </div>
    )
  }
}

export default SideNav;