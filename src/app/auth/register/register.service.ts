import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Register } from './register';

@Injectable()
export class RegisterService {
    private headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    private options = {headers: this.headers};
    // private url = 'https://private-301d1f-starterkit.apiary-mock.com/register';
    private url = 'https://dev.badr.co.id/freedom/auth/register';

    constructor (private http: HttpClient) {}

    postLogin(register: Register): Observable<Register> {
        return this.http.post(this.url, register, this.options)
                    .map(this.extractData)
                    .catch(this.handleError);
    }

    private extractData(res: Response) {
        return res || {};
    }

    private handleError(error: Response | any) {
        return Observable.throw(error);
    }
}
