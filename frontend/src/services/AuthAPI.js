import { SERVER_URL } from "../constants/urls";

export const USER_DATA_URL = SERVER_URL + 'api/point-of-sale/user/';

export const loginUser = ({token, user}) => {
    localStorage.setItem('token', token);
    localStorage.setItem('id', user.id);
    localStorage.setItem('username', user.username);
    localStorage.setItem('role', user.role);
};

export const logoutUser = () => localStorage.clear();

export const checkToken = () => localStorage.getItem('token') && (localStorage.getItem('token').length === 40);

export const checkUser = () => localStorage.getItem('username') && localStorage.getItem('role') && localStorage.getItem('id');

export const authUser = () => checkToken() && checkUser();

export const authAdminUser = () => authUser() && localStorage.getItem('role') === 'AD';