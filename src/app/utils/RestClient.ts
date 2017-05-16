import { environment } from 'environments/environment';
import { Http, Headers, URLSearchParams, ResponseContentType, RequestOptionsArgs } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RestClient {

    private params: URLSearchParams;
    private headers: Headers;
    private body: string;
    private url: string;
    private responseType: ResponseContentType;

    constructor(private http: Http) {}

    to(url: string) {
        this.url = environment.hostAPI + url;
        return this;
    }

    setParams(params: { [key: string]: any}) {
        if (this.params == null) {
            this.params = new URLSearchParams();
        }
        for (var key in params) {
            var value = params[key];
            this.params.append(key, value);
        }
        return this;
    }

    setHeaders(headers: { [key: string]: string }) {
        if (this.headers == null) {
            this.headers = new Headers();
        }
        for (var key in headers) {
            var value = headers[key];
            this.headers.append(key, value);
        }
        return this;
    }

    setBody(body: any) {
        this.body = body;
        return this;
    }

    setResponseType(type: ResponseContentType) {
        this.responseType = type;
        return this;
    }

    get() {
        return this.http.get(this.url, this.requestOptions());
    }

    post() {
        return this.http.post(this.url, this.body, this.requestOptions());
    }

    put() {
        return this.http.put(this.url, this.body, this.requestOptions());
    }

    delete() {
        return this.http.delete(this.url, this.requestOptions());
    }

    patch() {
        return this.http.patch(this.url, this.body, this.requestOptions());
    }

    options() {
        return this.http.options(this.url, this.requestOptions());
    }

    private requestOptions() {
        return {params: this.params, headers: this.headers, responseType: this.responseType};
    }

}