import React, { useEffect } from 'react';
import { callbackFreshbooks } from '../services/apiService';

const Callback = () => {
    useEffect(() => {
        const handleCallback = async () => {
            try {
                const response = await callbackFreshbooks();
                console.log('Callback response:', response.data);
            } catch (error) {
                console.error('Error handling callback:', error);
            }
        };
        handleCallback();
    }, []);

    return (
        <div>
            <h1>Callback</h1>
            <p>Processing callback...</p>
        </div>
    );
};

export default Callback;
