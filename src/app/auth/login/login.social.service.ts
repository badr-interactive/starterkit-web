import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { LoginSocial } from './login';

@Injectable()
export class LoginSocialService {
    private headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    private options = {headers: this.headers};
    // private url = 'https://private-301d1f-starterkit.apiary-mock.com/login';
    private url = 'https://dev.badr.co.id/freedom/auth/social_login';

    constructor (private http: HttpClient, private sanitizer: DomSanitizer) {}

    postLogin(login: LoginSocial): Observable<LoginSocial> {
        return this.http.post(this.url, login, this.options)
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
