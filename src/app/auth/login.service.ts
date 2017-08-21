import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient, HttpResponse } from "@angular/common/http";

import { Observable } from "rxjs";
import 'rxjs/add/operator/map';
import { Login } from "./login";

@Injectable()
export class LoginService {
    private headers = new HttpHeaders({'Content-Type': 'application/json'});
    private options = {headers: this.headers};
    private url = 'https://private-301d1f-starterkit.apiary-mock.com/login';

    constructor (private http: HttpClient) {}

    postLogin(login: Login): Observable<Login> {
        return this.http.post(this.url, login, this.options)
                    .map(this.extractData)
                    .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res;
        return body || {};
    }

    private handleError(error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.message || error);
    }
}