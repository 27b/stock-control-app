import React, { useState } from 'react';
import { loginUser } from '../../services/Auth/AuthAPI';
import { checkUserCredentials } from '../../services/Auth/LoginAPI';

const Login = () => {
    const initialState = {username: '', password: ''};
    const [state, setState] = useState(initialState);
    const handleInputChange = e => setState({...state, [e.target.name]: e.target.value});
    const handleSubmit = async event => {
        event.preventDefault();
        try {
            let response = await checkUserCredentials(state);
            let result = await response.json();
            if (result.token) loginUser(result.token);
        }
        catch (error) {
            console.log('Login error: ' + error);
        }
        setState(initialState);
    }

    return (
        <main className="page-center">
            <article className="sign-up">
                <h1 className="sign-up__title">Inventory Management</h1>
                <p className="sign-up__subtitle">Sign in to your account to continue</p>
                <form onSubmit={handleSubmit} className="sign-up-form form">
                    <label className="form-label-wrapper">
                        <p className="form-label">Username</p>
                        <input
                            className="form-input"
                            name="username"
                            placeholder="Enter your username"
                            required=""
                            value={state.username || ''}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label className="form-label-wrapper">
                        <p className="form-label">Password</p>
                        <input
                            className="form-input"
                            name="password"
                            type="password"
                            placeholder="Enter your password"
                            required=""
                            value={state.password || ''}
                            onChange={handleInputChange}
                        />
                    </label>
                    <br/>
                    <button className="form-btn primary-default-btn transparent-btn">Sign in</button>
                </form>
            </article>
        </main>
    )
}

//<a className="link-info forget-link" href="##">Forgot your password?</a>
//<label className="form-checkbox-wrapper">
//    <input className="form-checkbox" type="checkbox" required="" onChange={handleInputChange} />
//    <span className="form-checkbox-label">Remember me next time</span>
//</label>

export default Login;