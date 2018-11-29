import React from 'react';
import { Link } from "react-router-dom";

import './side-nav.scss';

const SideNav = () => (
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
        <Link className="nav-link" to='/login'>Sign out</Link>
      </li>
      <li className="nav-link">
        <Link className="nav-link" to='/account-settings'>Account Settings</Link>
      </li>
    </ul>
  </div>
)

export default SideNav;