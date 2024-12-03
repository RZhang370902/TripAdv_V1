import React from 'react';
import '../styles/Login.css';

function Login() {
    return (
        <div className="login-container">
            <h1>Login</h1>
            <div className="login-form">
                <div className="form-group">
                    <label>Username/Email:</label>
                    <input 
                        type="text" 
                        placeholder="Enter your username or email"
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input 
                        type="password" 
                        placeholder="Enter your password"
                    />
                </div>
                <button className="login-button">Login</button>
                <div className="login-footer">
                    <p>Don't have an account? <a href="/register">Register here</a></p>
                </div>
            </div>
        </div>
    );
}

export default Login; 