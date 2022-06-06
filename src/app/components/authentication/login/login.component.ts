import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router, CanActivate } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: any ={}
  constructor(public jwtHelper: JwtHelperService,  public router: Router) { }

  ngOnInit(): void {

  }

  onLogin(){
    console.log('login', this.formLogin)
    if(this.formLogin && this.formLogin.name && this.formLogin.password){
      if(this.formLogin.name == 'chinhnd' && this.formLogin.password == 'admin'){
        let new_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
        localStorage.setItem('token', new_token);
      }
    }
    let token = localStorage.getItem('token');
    if(token){
      this.router.navigate(['crm']);
      if(!this.jwtHelper.isTokenExpired(token)){
        // do something
      }
    }

  }
}
