import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

	public user:any = {};

  constructor(private router:Router) {

  	this.user = AppComponent.getDecodedToken().data;

  }

  logout() {
  	AppComponent.logout();
  	this.router.navigate(['/login']);
  }

  ngOnInit() {
  }

}
