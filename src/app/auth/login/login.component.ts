import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelper } from 'angular2-jwt';

import { AppComponent } from '../../app.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthService, JwtHelper]
})
export class LoginComponent implements OnInit {

	public email:string;
	public pwd: string;

	public errorMessage:string = '';
  public warningMessage:string = '';

  constructor(private authService:AuthService, private router:Router, private jwt:JwtHelper) { }


  ngOnInit() {
  }

  public login() {
    if (this.email == ''){
      this.errorMessage = 'Complete all fields';
      return;
    }

    if (this.pwd == ''){
      this.errorMessage = 'Complete all fields';
      return;
    }

    this.authService.getToken({email:this.email, pwd:this.pwd}).subscribe(
       res => this.loginSuccess(res),
       error => this.loginError(error)
    );
  }

  private loginSuccess(res:any){

    console.log(res);

    if(!res.success) this.loginError(res);


    AppComponent.token = res.data;
    AppComponent.user = this.jwt.decodeToken(res.data);

    this.router.navigate(['/products']);
  }

  private loginError(response:any){
    alert(response.message);
    console.error(response);
  }

}
