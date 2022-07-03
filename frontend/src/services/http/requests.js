export const sendRequest = (method, url, data=null) => {
    let options = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
    }
    if (method !== 'get' && method !== 'GET')
        options['body'] = JSON.stringify(data);
    return fetch(url, options);
}

export const sendAuthRequest = (method, url, data=null) => {
    let options = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + localStorage.getItem('token'),
        },
    }
    if (method !== 'get' && method !== 'GET')
        options['body'] = JSON.stringify(data);
    return fetch(url, options);
}