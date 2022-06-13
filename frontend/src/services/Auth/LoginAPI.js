const LOGIN_API = 'http://127.0.0.1:8000/api/point-of-sale/login/';

export const loginUser = async credentials => {
    return await fetch (LOGIN_API, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'username': String(credentials.username),
            'password': String(credentials.password),
        })
    })
}