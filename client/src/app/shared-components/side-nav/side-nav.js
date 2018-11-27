import React from 'react';
import './side-nav.scss';

const SideNav = () => (
  <div className="side-nav-container">    
    <ul className="nav-link-container">
      <div className="nav-title-container">
        <h4 className="nav-title">Site Navigation</h4>
      </div>
      <li className="nav-link">
        Conversations
      </li>
      <li className="nav-link">
        Dashboard
      </li>
      <li className="nav-link">
        MyStore
      </li>
      <li className="nav-link">
        Feed
      </li>
      <li className="nav-link">
        Friends
      </li>
      <li className="nav-link last-item">
        About
      </li>
    </ul>
  </div>
)

export default SideNav;