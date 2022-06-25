export class HTTPHandler {
    constructor(url, requestHandler) {
        this.URL = url;
        this.REQUEST = requestHandler;
    }

    get = async (id='') => this.REQUEST('GET', this.URL + id);
    
    post = async (data) => this.REQUEST('POST', this.URL, data);
    
    put = async (id, data) => this.REQUEST('PUT', this.URL + id, data);
    
    delete = async (id) => this.REQUEST('DELETE', this.URL + id);
}
