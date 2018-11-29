import React from 'react';
import './header.scss';

class Header extends React.Component {
  render () {
    return (
      <div className="header-container">        
        <div className="logo-container">
          <p className="logo">Thrift Store</p>
        </div>
        <div className="username-container">
          <p className="user-name">Jane Doe</p>
        </div>
      </div>
    )
  }
}

export default Header;