import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser, checkUserCredentials } from '../../services/AuthAPI';
import './css/styles.css';

const Login = () => {
    const navigate = useNavigate()
    const initialState = {username: '', password: ''};
    const [state, setState] = useState(initialState);
    const handleInputChange = e => setState({...state, [e.target.name]: e.target.value});
    const handleSubmit = event => {
        event.preventDefault();
        checkUserCredentials(state)
            .then(response => response.json())
            .then(result => {
                if (result.token) {
                    loginUser(result);
                    if (result.user.role === 'AD') navigate('/admin');
                    else navigate('/dashboard');
                }
                else {
                    alert(result.error);
                }
            })
        setState(initialState);
    }

    return (
        <div className="div-center text-center">
            <main className="form-signin w-100 m-auto align-center">
                <form onSubmit={handleSubmit}>
                    <h1 className="h3 mb-3 fw-normal">Sign in</h1>
                    <h3 className="h6 mb-3 fw-normal">Sign in to continue</h3>
                    <div className="form-floating">
                        <input
                            type="username" className="form-control" id="floatingInput" placeholder="name@example.com"
                            name="username" value={state.username} onChange={handleInputChange}
                        />
                        <label>Username</label>
                    </div>
                    <div className="form-floating">
                        <input
                            type="password" className="form-control" id="floatingPassword" placeholder="Password"
                            name="password" value={state.password} onChange={handleInputChange}
                        />
                        <label>Password</label>
                    </div>

                    <div className="checkbox mb-3">
                        <label> <input type="checkbox" value="remember-me" /> Remember me </label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                    <p className="mt-5 mb-3 text-muted">
                        <a href="/">Forgot password?</a>
                    </p>
                </form>
            </main>
        </div>
    )
}

export default Login;