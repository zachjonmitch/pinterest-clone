import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux'

import Register from './Register';
import Login from './Login';
import Profile from './Profile';
import Dashboard from './Dashboard.js';
import requireAuth from '../utils/requireAuth.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {isLoggedIn: false};
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    const guestApp = (
      <div className="app">
        {console.log(isAuthenticated)}
        <Route exact path="/" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/profile" component={requireAuth(Profile)} />
      </div>
    );

    const userApp = (
      <div className="app">
        {console.log(isAuthenticated)}
        <Route exact path="/" component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/profile" component={requireAuth(Profile)} />
      </div>
    );

    return (
      <Router>
        {isAuthenticated ? userApp : guestApp}
      </Router>
    );
  }
}

App.proptypes = {
  auth: React.PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(App);