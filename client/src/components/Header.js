import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {

  renderLogin() {
    const currentUser = this.props.auth;
    switch (currentUser) {
      case null:
        return;
      case false:
        return <li><a className="waves-effect waves-light btn" href="/auth/google">Login</a></li>;
      default:  //user IS logged in
        return (
          <ul>
            <li>{`${currentUser.name} (${currentUser.points})`}</li>
            <li>
              <a className="waves-effect waves-light btn" href="/api/logout">
                Logout
              </a>
            </li>
          </ul>
        )
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            className="left brand-logo"
            to={this.props.auth ? '/surveys' : '/'}
          >
            Element
          </Link>
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
