import { Component, OnInit, } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { forbiddenNameValidator } from '../../../shared/directive/forbidden-name.directive';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: any = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      forbiddenNameValidator(/bob/i)
    ]),
    password: new FormControl('', [Validators.required]),
  });
  userData: any ={};
  submitted = false;
  msgError = '';
  constructor(public jwtHelper: JwtHelperService,  public router: Router, public auth: AuthService) { }

  ngOnInit(): void {
    this.formLogin.valueChanges.subscribe((currentValue: any) => {
      this.msgError = '';
    });
  }

  onLogin(): void{
    this.submitted = true;
    console.log('login', this.formLogin.valid)
    if(this.formLogin.valid){
      this.auth.postLogin(this.formLogin.value).subscribe(
          (data: any) => {
            this.submitted = false;
            if(data.success){
              this.userData = { ...data };
              localStorage.setItem('token', data.token);
              this.router.navigate(['crm']);
            }else{
              this.msgError = data.msg
            }
          },
          error => {
            this.submitted = false;
            this.msgError = error;
          }
      );
    }
    //return;
    //if(this.formLogin && this.formLogin.name && this.formLogin.password){
    //  if(this.formLogin.name == 'chinhnd' && this.formLogin.password == 'admin'){
    //    let new_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
    //    localStorage.setItem('token', new_token);
    //  }
    //}
    //let token = localStorage.getItem('token');
    //if(token){
    //  this.router.navigate(['crm']);
    //  if(!this.jwtHelper.isTokenExpired(token)){
    //    // do something
    //  }
    //}
  }

  get username(){
    return this.formLogin.get('username');
  }

  get password(){
    return this.formLogin.get('password');
  }

  ngOnDestroy() {
    this.formLogin.valueChanges.unsubscribe();
  }
}
