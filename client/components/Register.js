import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userSignupRequest } from '../actions/signupActions.js';
import { addFlashMessage } from '../actions/flashMessages.js';
import { login } from '../actions/authActions.js';
import RegisterForm from './RegisterForm.js';


class Register extends Component {
    render() {
        const { userSignupRequest, addFlashMessage, login } = this.props;
        return (
            <main id="registration">
                <section className="wrapper"></section>

                <section className="login__btn">
                    <Link to="/login">Log in</Link>
                </section>

                <section className="card">
                    <div className="card__img"></div>
                    <div className="card__details">
                        <div className="card__icon">
                            <i className="fa fa-pinterest"></i>
                        </div>
                        <div className="card__title">Welcome to Pinterest</div>
                        <div className="card__sub-title">The world's catalog of ideas</div>

                        <RegisterForm userSignupRequest={userSignupRequest} addFlashMessage={addFlashMessage} login={login} />

                        <p className="card__disclaimer">Creating an account means you're okay with<br></br>Pinterest's <Link to="/">Terms of Service</Link>, <Link to="/">Privacy Policy</Link></p>
                    </div>
                </section>                        

                <section className="footer">
                    <Link to="/login">About Pinterest</Link>
                    <Link to="/login">Blog</Link>
                    <Link to="/login">Businesses</Link>
                    <Link to="/login">Terms of Service</Link>
                    <Link to="/login">Privacy Policy</Link>
                    <Link to="/login">Help</Link>
                    <Link to="/login">IPhone App</Link>
                    <Link to="/login">Android App</Link>
                    <Link to="/login">Users</Link>
                    <Link to="/login">Collections</Link>
                    <Link to="/login">Explore</Link>
                    <Link to="/login">International</Link>
                </section>

            </main>
        )
    }
}

Register.propTypes = {
    userSignupRequest: React.PropTypes.func.isRequired,
    addFlashMessage: React.PropTypes.func.isRequired,
    login: React.PropTypes.func.isRequired
}

export default connect((state) => {return {} }, { userSignupRequest, addFlashMessage, login })(Register);