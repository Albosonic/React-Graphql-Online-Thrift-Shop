import React from 'react';
import { Link } from "react-router-dom";

import './side-nav.scss';
import store from '../../redux/store';

class SideNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userStore: store.getState().myStore,
      storeLinkTitle: this.getStoreLinkTitle()
    }

  }

  getStoreLinkTitle() {    
    if(store.getState().myStore) {
      return 'My Store';
    } else {
      return 'Create Store';
    }
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
          <li className="nav-link">
            <Link className="nav-link" to='/login'>Sign out</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default SideNav;