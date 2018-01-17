import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

//components
import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import UserPointList from './UserPointList';

class App extends Component {
  componentDidMount(){
    this.props.fetchUser();
  }

  render(){
    return (
      <div className="wc-main">
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/pointlist" component={UserPointList} />
              <Route path="/" component={Landing} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  };
};

export default connect(null, actions)(App);
