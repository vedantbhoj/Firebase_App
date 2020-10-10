import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import PageNotFound from "./PageNotFound";
import Home from "./Home";
import Profile from "./Profile";
import Login from "./Login";
import { connect } from "react-redux";
import Signout from "./Firebase/Components/Signout";
import AuthenticationRoute from './AuthenticationRoute';
import PrivateRoute from './PrivateRoute';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div className="nav-bar">
            <div className="links">
              <Link to="/login" className="link">
                Login
              </Link>

              <Link to="/" className="link">
                Home
              </Link>

              <Link to="/profile" className="link">
                Profile
              </Link>
            </div>
          </div>
          <div className="signout">{this.props.isLoggedIn && <Signout />}</div>
          <Switch>
            <Route path="/" component={Home} exact={true} />
            <Route path="/home" component={Home} exact={true} />
            <PrivateRoute path="/profile" component={Profile} exact={true} />
            <AuthenticationRoute path="/login" component={Login} exact={true} />
            <Route component={PageNotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.auth.isLoggedIn,
  };
};
export default connect(mapStateToProps, null)(App);
