export class HTTPHandler {
    constructor(url, requestHandler) {
        this.URL = url;
        this.REQUEST = requestHandler;
    }

    get = (id='') => this.REQUEST('GET', this.URL + id);
    
    post = (data) => this.REQUEST('POST', this.URL, data);
    
    put = (id, data) => this.REQUEST('PUT', this.URL + id + '/', data);
    
    delete = (id) => this.REQUEST('DELETE', this.URL + id);
}
