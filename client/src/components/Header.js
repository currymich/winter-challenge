import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a className="left brand-logo">Element</a>
          <ul className="right">
            <li><a href="#">Login</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
