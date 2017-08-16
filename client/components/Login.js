import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { login } from '../actions/authActions.js';
import LoginForm from './LoginForm.js';
import NavigationBar from './NavigationBar.js';

class Login extends Component {
    render() {
        const { login } = this.props;
        return(
            <main id="login">
                <NavigationBar />
                <section className="wrapper"></section>

                <section className="card">
                    <div className="card__img"></div>
                    <div className="card__details">
                        <div className="card__icon">
                            <i className="fa fa-pinterest"></i>
                        </div>
                        <div className="card__title">Login to see more</div>

                        <LoginForm login={login} />

                        <Link to="/" className="card__disclaimer--reset">Forgot your account info?</Link>
                        <hr></hr>
                        <p className="card__disclaimer--signup">Not on pinterest yet?<Link to="/">Sign up</Link></p>
                    </div>
                </section>

            </main>
        )
    }
}

Login.propTypes = {
    login: React.PropTypes.func.isRequired
}

export default connect((state) => {return {} }, { login })(Login);