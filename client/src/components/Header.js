import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {

  renderLogin() {
    const { auth } = this.props;
    switch (auth) {
      case null:
        return;
      case false:
        return <li><a className="login waves-effect waves-light btn" href="/auth/google">Login</a></li>;
      default:  //user IS logged in
        return (
          <ul>
            <li>
              <a className="logout waves-effect waves-light btn" href="/api/logout">
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
            to={this.props.auth ? '/dashboard' : '/'}
          >
            WINTER CHALLENGE
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
  return { auth: state.auth, points: state.points };
};

export default connect(mapStateToProps)(Header);
