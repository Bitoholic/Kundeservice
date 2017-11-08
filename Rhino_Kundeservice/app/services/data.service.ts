import { Injectable } from '@angular/core';
import { Inquiry } from '../models/inquiry/inquiry.model';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Headers } from "@angular/http";


@Injectable()
export class DataService {

    constructor(public _http: Http) { }

    getFAQList() {
        return this._http.get('api/FAQ').map(res => res.json());
    }

    getInquiryList() {
        return this._http.get('api/CustomerService').map(res => res.json());
    }

    postInquiry(question: Inquiry) {
        var body: string = JSON.stringify(question);
        var headers = new Headers({ "Content-Type": "application/json" });

        return this._http.post("api/CustomerService", body, { headers: headers })
            .map(res => res.toString());
    }
}