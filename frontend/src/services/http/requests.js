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
