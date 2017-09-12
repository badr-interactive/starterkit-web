import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Quote } from './quote';

@Injectable()
export class QuoteService {
    private headers = new HttpHeaders();
    private options = {headers: this.headers};
    // private url = 'https://private-301d1f-starterkit.apiary-mock.com/login';
    private url = 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1';

    constructor (private http: HttpClient, private sanitizer: DomSanitizer) {}

    getQuote(quote: Quote): Observable<Quote> {
        return this.http.get(this.url, this.options)
                    .map(this.extractData)
                    .catch(this.handleError);
    }

    private extractData(res: Response) {
        const body = res;
        return body || {};
    }

    private handleError(error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error);
    }
}
