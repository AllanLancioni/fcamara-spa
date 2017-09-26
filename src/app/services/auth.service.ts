import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { AppComponent } from '../app.component';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from "rxjs/Observable";

@Injectable()
export class AuthService {


  private headers:Headers;
  private baseUrl:string = `${AppComponent.DOMAIN}/api/v1/users/`;

	constructor(private http:Http) {

    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
		//this.headers.append('Content-Type', 'application/x-www-form-urlencoded');

	}
  
  public getToken(params:{email:string, pwd:string}):Observable<any> {

    //var data:string = `${this.baseUrl}/login`;

    console.log('auth', params)

    return this.http.post(this.baseUrl + 'login', params, {
      headers: this.headers
    }).map( response => response.json() );

  }

  
  public get(id: string):Observable<any> {

    return this.http.get(this.baseUrl + id, {
      headers: this.headers
    }).map( response => response.json() );

  };

  //post
  public create(params: {}):Observable<any>{

    return this.http.post(this.baseUrl, params, {
      headers: this.headers
    }).map( response => response.json() );

  };

 
}