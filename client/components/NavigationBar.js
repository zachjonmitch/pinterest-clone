import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { logout } from '../actions/authActions.js';

class NavigationBar extends Component {
    logout(e) {
        e.preventDefault();
        this.props.logout();
    }
    render() {
        const { isAuthenticated } = this.props.auth;

        const userLinks = (
            <ul className="navbar">
                <li><a href="#" onClick={this.logout.bind(this)}>Logout</a></li>
            </ul>
        );
        
        const guestLinks = (
            <ul className="navbar">
                <li><Link to="/register">Sign Up</Link></li>
                <li><Link to="/login">Sign Up</Link></li>
            </ul>
        );
        return (
            <div className="navigation">
                { isAuthenticated ? userLinks : guestLinks }
            </div>
        );
    }
}

NavigationBar.propTypes = {
    auth: React.PropTypes.object.isRequired,
    logout: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    };
}

export default connect(mapStateToProps, { logout })(NavigationBar);