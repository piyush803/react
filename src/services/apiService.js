import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/freshbooks/'; 
export const fetchFreshbooks = async () => {
    return axios.get(`${API_BASE_URL}login/`);
};

export const loginFreshbooks = async () => {
    return axios.get(`${API_BASE_URL}login/`);
};

export const callbackFreshbooks = async () => {
    return axios.get(`${API_BASE_URL}callback/`);
};

export const getFreshbooksAccounts = async () => {
    return axios.get(`${API_BASE_URL}accounts/`);
};

export const getFreshbooksTransactions = async () => {
    return axios.get(`${API_BASE_URL}transactions/`);
};

export const getSession = async () => {
    return axios.get(`${API_BASE_URL}session/`);
};

export const setSession = async () => {
    return axios.post(`${API_BASE_URL}set-session/`);
};
