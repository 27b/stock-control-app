const USER_DATA_URL = 'http://localhost:8000/api/point-of-sale/user/';

export const loginUser = token => localStorage.setItem('token', token);

export const logoutUser = () => localStorage.removeItem('token');

export const checkUser = async () => sendAuthRequest('GET', USER_DATA_URL).json();

export const authUser = async () => localStorage.getItem('token') && checkUser;

export const authAdminUser = async () => localStorage.getItem('token') && checkUser.data.role === 'AD';

export const sendRequest = async (method, url, data=null) => {
    return await fetch (url, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
}

export const sendAuthRequest = async (method, url, data=null) => {
    return await fetch (url, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + localStorage.getItem('token'),
        },
        body: JSON.stringify(data)
    })
}
