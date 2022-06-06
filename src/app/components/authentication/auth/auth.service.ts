import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable()
export class AuthService {
    constructor(public jwtHelper: JwtHelperService) {}
    public isAuthenticated(): boolean {
        let token = localStorage.getItem('token');
        if(!token){
            token = ''
        }
        //token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
        return !this.jwtHelper.isTokenExpired(token);
    }
}