import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { appConfig } from '../app.config';
import 'rxjs/add/operator/map'

import { AuthenticationService } from './index';
import { User } from '../_models/index';

@Injectable()
export class UserService {
    constructor(
        private http: Http,
        private authenticationService: AuthenticationService) {
    }

    // getUsers(): Observable<User[]> {
    //     // add authorization header with jwt token
    //     let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
    //     let options = new RequestOptions({ headers: headers });
    //
    //     // get users from api
    //     return this.http.get(appConfig.apiUrl + '/usuarios')
    //         .map((response: Response) => response.json());
    // }

    getUsers(): Observable<any>{
      let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
      let options = new RequestOptions({ headers: headers });
      return this.http.get(appConfig.apiUrl + '/usuarios', options);
    }

    getById(_id:string): Observable<any>{
      return this.http.get(appConfig.apiUrl + '/usuarios/' + _id);
    }
}
