import React, { useState, useEffect } from 'react';
import { fetchFreshbooks, getFreshbooksAccounts, getFreshbooksTransactions } from '../services/apiService';

const Freshbooks = () => {
    const [data, setData] = useState(null);
    const [accounts, setAccounts] = useState([]);
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetchFreshbooks();
                setData(response.data);
            } catch (error) {
                console.error('Error fetching Freshbooks data:', error);
            }
        };
        getData();
    }, []);

    useEffect(() => {
        const fetchAccounts = async () => {
            try {
                const response = await getFreshbooksAccounts();
                setAccounts(response.data);
            } catch (error) {
                console.error('Error fetching Freshbooks accounts:', error);
            }
        };
        fetchAccounts();
    }, []);

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const response = await getFreshbooksTransactions();
                setTransactions(response.data);
            } catch (error) {
                console.error('Error fetching Freshbooks transactions:', error);
            }
        };
        fetchTransactions();
    }, []);

    return (
        <div>
            <h1>Freshbooks Data</h1>
            <h2>Data:</h2>
            <pre>{JSON.stringify(data, null, 2)}</pre>
            <h2>Accounts:</h2>
            <pre>{JSON.stringify(accounts, null, 2)}</pre>
            <h2>Transactions:</h2>
            <pre>{JSON.stringify(transactions, null, 2)}</pre>
        </div>
    );
};

export default Freshbooks;
