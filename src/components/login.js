import React from 'react';
import { useNavigate } from 'react-router-dom';
import { loginFreshbooks } from '../services/apiService';
// import { createBrowserHistory } from 'history';




const Login = () => {
    const navigate = useNavigate();
    const handleLogin = async () => {
        try {
            const response = await loginFreshbooks();
            console.log('Login response:', response.data);
            // history.push('/callback'); 
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <button onClick={handleLogin}>Login to Freshbooks</button>
        </div>
    );
};

export default Login;
