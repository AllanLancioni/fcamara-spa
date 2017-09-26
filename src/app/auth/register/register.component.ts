import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [AuthService]
})
export class RegisterComponent implements OnInit {

	public name: string;
	public email: string;
	public pwd: string;
	public confirmPwd: string;

  constructor(private authService:AuthService, private activatedRoute:ActivatedRoute, private router: Router){ }

  ngOnInit() {
    
  }

  public register() {

    if (this.pwd !== this.confirmPwd) return alert('Senhas diferentes!');
    if (!this.pwd || !this.name || !this.email || !this.confirmPwd) alert('Por favor, preencha todos os campos!')

    this.authService.create({name:this.name, email:this.email, password:this.pwd}).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['./login']);
      },
      err => console.error(err)
    )
  }

}
