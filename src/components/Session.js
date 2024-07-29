import React, { useState, useEffect } from 'react';
import { getSession, setSession } from '../services/apiService';

const Session = () => {
    const [sessionData, setSessionData] = useState(null);

    useEffect(() => {
        const fetchSession = async () => {
            try {
                const response = await getSession();
                setSessionData(response.data);
            } catch (error) {
                console.error('Error fetching session:', error);
            }
        };
        fetchSession();
    }, []);

    const handleSetSession = async () => {
        try {
            await setSession();
            console.log('Session set successfully');
        } catch (error) {
            console.error('Error setting session:', error);
        }
    };

    return (
        <div>
            <h1>Session</h1>
            <button onClick={handleSetSession}>Set Session</button>
            <h2>Session Data:</h2>
            <pre>{JSON.stringify(sessionData, null, 2)}</pre>
        </div>
    );
};

export default Session;
