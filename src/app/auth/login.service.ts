import { Injectable } from "@angular/core";
import { Headers, Http, Response, RequestOptions } from "@angular/http";

import { Observable } from "rxjs";
import 'rxjs/add/operator/map';
import { Login } from "./login";

@Injectable()
export class LoginService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private options = new RequestOptions({headers: this.headers});
    private url = 'https://private-301d1f-starterkit.apiary-mock.com/login';

    constructor (private http: Http) {}

    postLogin(login: Login): Observable<Login> {
        return this.http.post(this.url, login, this.options)
                    .map(this.extractData)
                    .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    private handleError(error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.message || error);
    }
}