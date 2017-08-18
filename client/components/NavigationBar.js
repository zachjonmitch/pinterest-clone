import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { logout } from '../actions/authActions.js';

class NavigationBar extends Component {
    constructor(props) {
        super(props)
        this.state = { isModalOpen: false }
    }

    openModal() {
        this.setState({ isModalOpen: true })
    }

    closeModal() {
        this.setState({ isModalOpen: false })
    }

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
            <nav className="masthead">
                <div className="masthead__brand">
                    <span className="masthead__brand--pinterest fa fa-pinterest fa-2x"></span>
                </div>
                <ul className="masthead__links">
                    <li className="masthead__link">Analytics</li>
                    <li className="masthead__link">Ads</li>
                </ul>
                <form className="masthead__form">
                    <input className="masthead__input--search" type="search" placeholder="search"/>
                </form>
                <div className="masthead__icons">
                    <div className="masthead__icon">
                        <span className="masthead__icon--compass fa fa-compass"></span>
                    </div>
                    <div className="masthead__icon">
                        <span className="masthead__icon--add fa fa-plus" onClick={() => this.openModal()}></span>
                    </div>
                    <div className="masthead__icon">
                        <span className="masthead__icon--alerts fa fa-bell"></span>
                    </div>
                    <div className="masthead__icon">
                        <img src="" alt=""/>
                    </div>
                </div>

                <div className="navigation">
                    { isAuthenticated ? userLinks : guestLinks }
                </div>

                <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
                    <h1>Modal title</h1>
                    <p>hello</p>
                    <p><button onClick={() => this.closeModal()}>Close</button></p>
                </Modal>

                <div className="masthead__mobiles">
                    <div className="masthead__mobile">
                        <span className="masthead__mobile--brand fa fa-pinterest"></span>
                    </div>
                    <div className="masthead__mobile">
                        <span className="masthead__mobile--search fa fa-search"></span>
                    </div>
                    <div className="masthead__mobile">
                        <span className="masthead__mobile--menu fa fa-bars"></span>
                    </div>
                    <div className="masthead__mobile">
                        <span className="masthead__mobile--user fa fa-user"></span>
                    </div>
                    <div className="masthead__mobile">
                        <span className="masthead__mobile--notifications fa fa-bell"></span>
                    </div>
                </div>
            </nav>
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