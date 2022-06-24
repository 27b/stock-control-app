export const USER_DATA_URL = 'http://localhost:8000/api/point-of-sale/user/';

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

export const sendRequest = async (method, url, data=null) => {
    let options = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
    }
    if (method !== 'get' && method !== 'GET')
        options['body'] = JSON.stringify(data);
    return await fetch (url, options);
}

export const sendAuthRequest = async (method, url, data=null) => {
    let options = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + localStorage.getItem('token'),
        },
    }
    if (method !== 'get' && method !== 'GET')
        options['body'] = JSON.stringify(data);
    return await fetch(url, options);
}
