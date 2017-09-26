import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { AppComponent } from '../app.component';
import { Product } from '../products/products.interface';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from "rxjs/Observable";

@Injectable()
export class ProductsService {

  private headers:Headers;
  private baseUrl:string = `${AppComponent.DOMAIN}/api/v1/products/`;

  constructor(private http:Http) {

    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Auth-Token', AppComponent.token || '');
    
    // this.headers.append('Authorization', `Bearer ${AppComponent.token.access_token}`);

  }

  //get
  public get(id: string):Observable<any> {

    return this.http.get(this.baseUrl + id, {
      headers: this.headers
    }).map( response => response.json() );

  };

  //post
  public create(params: Product):Observable<any>{

    return this.http.post(this.baseUrl, params, {
      headers: this.headers
    }).map( response => response.json() );

  };

  public list():Observable<any>{

    return this.http.get(this.baseUrl, {
      headers: this.headers
    }).map( response => response.json() );

  };

  //put
  public update(id:string, params: Product):Observable<any>{

    return this.http.put(this.baseUrl + id, params, {
      headers: this.headers
    }).map( response => response.json() );

  };

  //delete
  public delete(id: string):Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`, {
      headers: this.headers
    }).map( response => response.json() );


  };


}
