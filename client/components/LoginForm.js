import React, { Component } from 'react';
import validateInput from '../../server/shared/validations/signup.js';

class LoginForm extends Component {
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
            this.props.login(this.state).then(
                () => {
                    this.context.router.history.push('/');
                },
                ({ data }) => this.setState({ errors: data })
            );
        }
    }

    render() {
        const { errors } = this.state;
        return (
            <form className="signin" method="post" action="/" onSubmit={this.onSubmit}>
                <div className="signin__group">
                    <label>Email</label>
                    <input className="signin__input--email" placeholder="Email" name="email" onChange={this.onChange} value={this.state.email}></input>
                    {errors.email && <p className="signin__error--email">{errors.email}</p>}
                </div>
                <div className="signin__group">
                    <label>Password</label>
                    <input className="signin__input--password" placeholder="Password" type="password" name="password" onChange={this.onChange} value={this.state.password}></input>
                    {errors.password && <p className="signin__error--password">{errors.password}</p>}
                </div>
                <button className="signin__btn--submit" type="submit">Log in</button>
                <p>or</p>
                <button className="signin__btn--facebook">Continue with Facebook</button>
                <button className="signin__btn--google">Log in with Google</button>
            </form>
        )
    }
}

LoginForm.propTypes = {
    login: React.PropTypes.func.isRequired
}

LoginForm.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default LoginForm;