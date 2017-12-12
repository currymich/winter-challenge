import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  renderLogin() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <li><a href="/auth/google">Login</a></li>;
      default:  //user IS logged in
        return <li><a href="/api/logout">Logout</a></li>
    }
  }

  render() {
    console.log(this.props);
    return (
      <nav>
        <div className="nav-wrapper">
          <a className="left brand-logo">Element</a>
          <ul className="right">
            {this.renderLogin()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state){
  return { auth: state.auth };
};

export default connect(mapStateToProps)(Header);
