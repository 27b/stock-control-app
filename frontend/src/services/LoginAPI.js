import { sendRequest } from "./http/requests";
import { SERVER_URL } from '../constants/urls';

const LOGIN_URL = SERVER_URL + 'api/point-of-sale/login/';

export const checkUserCredentials = async credentials => sendRequest('POST', LOGIN_URL, {
    'username': String(credentials.username),
    'password': String(credentials.password),
});
