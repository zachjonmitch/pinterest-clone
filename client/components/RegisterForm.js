import React, { Component } from 'react';
import validateInput from '../../server/shared/validations/signup.js';

class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errors: {}
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    isValid() {
        const { errors, isValid } = validateInput(this.state);

        if (!isValid) {
            this.setState({ errors })
        }

        return isValid;
    }

    onSubmit(e) {
        e.preventDefault();

        if (this.isValid()) {
            this.setState({ errors: {} });
            this.props.userSignupRequest(this.state).then(
                () => {
                    this.props.addFlashMessage({
                        type: 'success',
                        text: 'Welcome to Pinterest!'
                    })
                    this.context.router.history.push('/');
                },
                ({ data }) => this.setState({ errors: data })
            ).then(
                () => {
                return this.props.login(this.state)
                }
            );
        }
    }
    render() {
        const { errors } = this.state;
        return (
            <form className="signup" method="post" action="/" onSubmit={this.onSubmit}>
                <div className="signup__group">
                    <label>Email</label>
                    <input className="signup__input--email" placeholder="Email" name="email" onChange={this.onChange} value={this.state.email}></input>
                    {errors.email && <p className="signup__error--email">{errors.email}</p>}
                </div>
                <div className="signup__group">
                    <label>Password</label>
                    <input className="signup__input--password" placeholder="Create a password" type="password" name="password" onChange={this.onChange} value={this.state.password}></input>
                    {errors.password && <p className="signup__error--password">{errors.password}</p>}
                </div>
                <button className="signup__btn--submit" type="submit">Continue</button>
                <p>or</p>
                <button className="signup__btn--facebook">Continue with Facebook</button>
                <button className="signup__btn--google">Sign up with Google</button>
            </form>
        )
    }
}

RegisterForm.propTypes = {
    userSignupRequest: React.PropTypes.func.isRequired,
    addFlashMessage: React.PropTypes.func.isRequired,
    login: React.PropTypes.func.isRequired
}

RegisterForm.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default RegisterForm;