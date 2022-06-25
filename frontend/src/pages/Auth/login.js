import React, { useState } from 'react';
import { loginUser } from '../../services/AuthAPI';
import { checkUserCredentials } from '../../services/LoginAPI';

import './css/styles.css';

const Login = () => {
    const initialState = {username: '', password: ''};
    const [state, setState] = useState(initialState);
    const handleInputChange = e => setState({...state, [e.target.name]: e.target.value});
    const handleSubmit = async event => {
        event.preventDefault();
        try {
            let response = await checkUserCredentials(state);
            let result = await response.json();
            if (result.token) loginUser(result);
        }
        catch (error) {
            console.log('Login error: ' + error);
        }
        setState(initialState);
    }

    return (
        <div class="div-center text-center">
            <main class="form-signin w-100 m-auto align-center">
                <form onSubmit={handleSubmit}>
                    <h1 class="h3 mb-3 fw-normal">Sign in</h1>
                    <h3 class="h6 mb-3 fw-normal">Sign in to continue</h3>

                    <div class="form-floating">
                        <input
                            type="username" class="form-control" id="floatingInput" placeholder="name@example.com"
                            name="username" value={state.username} onChange={handleInputChange}
                        />
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating">
                        <input
                            type="password" class="form-control" id="floatingPassword" placeholder="Password"
                            name="password" value={state.password} onChange={handleInputChange}
                        />
                        <label for="floatingPassword">Password</label>
                    </div>

                    <div class="checkbox mb-3">
                        <label> <input type="checkbox" value="remember-me" /> Remember me </label>
                    </div>
                    <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                    <p class="mt-5 mb-3 text-muted">
                        <a href="#">Forgot password?</a>
                    </p>
                </form>
            </main>
        </div>
    )
}

export default Login;