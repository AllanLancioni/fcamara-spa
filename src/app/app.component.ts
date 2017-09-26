import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelper } from 'angular2-jwt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  static DOMAIN:string = "http://localhost:8080";

  //TOKEN
  static set token(value:any){
    localStorage.setItem('token', JSON.stringify(value));
  }
  static get token(){
    return JSON.parse(localStorage.getItem('token'));
  }
  static getDecodedToken():any {
    const jwtHelper = new JwtHelper;
    return jwtHelper.decodeToken(AppComponent.token);
  }

  //USER
  static set user(value:any){
    localStorage.setItem('user', JSON.stringify(value));
  }
  static get user(){
    return JSON.parse(localStorage.getItem('user'));
  }

  //LOGOUT
  static logout(){
    AppComponent.token = '';
    AppComponent.user = '';
  }

  constructor(private router:Router) {

    /*if (AppComponent.token != '' && AppComponent.rememberMe){
      this.router.navigate(['/admin']);
    } else {
      AppComponent.logout();
      this.router.navigate(['/login']);
    }*/
  }
}