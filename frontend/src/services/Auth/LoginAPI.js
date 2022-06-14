import { sendRequest } from "./AuthAPI";

const LOGIN_URL = 'http://127.0.0.1:8000/api/point-of-sale/login/';

export const checkUserCredentials = async credentials => sendRequest('POST', LOGIN_URL, {
    'username': String(credentials.username),
    'password': String(credentials.password),
});
