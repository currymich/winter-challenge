import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import * as actions from "../actions";
import { AuthStateProvider } from "../providers/Auth";
import { GoalsStateProvider } from "../providers/Goals";
import "../style.css";

//components
import Header from "./Header";
import Landing from "./Landing";
import Dashboard from "./Dashboard";
import UserPointList from "./UserPointList";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";

const App = () => {
  // componentDidMount(){
  //   this.props.fetchUser();
  // }

  return (
    <AuthStateProvider>
      <GoalsStateProvider>
        <div className="wc-main">
          <BrowserRouter>
            <>
              <Header />
              <Switch>
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/pointlist" component={UserPointList} />
                <Route path="/login" component={LoginPage} />
                <Route path="/signup" component={SignupPage} />
                <Route path="/" component={Landing} />
              </Switch>
            </>
          </BrowserRouter>
        </div>
      </GoalsStateProvider>
    </AuthStateProvider>
  );
};

export default App;
