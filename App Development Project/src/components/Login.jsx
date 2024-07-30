import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    // State variables for email and password
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Handler for form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        // Handle form submission logic here
        try {
            const response = await axios.get(`http://localhost:8080/users?email=${email}&password=${password}`);
            if (response.data.length > 0) {
               
                
                console.log('Email:', lemail);
                console.log('Password:', lpassword);
                
                
                    navigate('/');
                
            }
            else {
                toast.error("wrong credentials");
            }
        }
        catch (e) {
            toast.error("Wrong credentials");
        }

    };
    return (
        <div className="login-container">
            <h2>Login to Your Account</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn login-btn">Login</button>
            </form>
            <div className="form-footer">
                <p>Don't have an account? <Link to="/register">Sign up here</Link></p>
            </div>
        </div>
    );
};

export default Login;
