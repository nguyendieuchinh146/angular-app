import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import {HttpClient,  HttpErrorResponse} from '@angular/common/http';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


import { APP_CONFIG } from 'src/app/shared/common/config';
import { User } from 'src/app/models/user';


@Injectable()
export class AuthService {
    //private currentUserSubject: BehaviorSubject<User>;
    constructor(public jwtHelper: JwtHelperService, private http: HttpClient) {}

    private handleError(error: HttpErrorResponse) {
        let error_msg = '';
        if (error.status === 0) {
            console.error('An error occurred:', error.error);
        } else {
            console.error(`Backend returned code ${error.status}, body was: `, error.error);
        }
        return throwError(() => new Error('Something bad happened; please try again later.'));
    }

    public isAuthenticated(): boolean {
        let token = localStorage.getItem('token');
        if(!token){
            token = ''
        }
        //token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
        return !this.jwtHelper.isTokenExpired(token);
    }

    postLogin(user:any) {
        return this.http.post<User>(`${APP_CONFIG.BASE_API_LINK.BASE}/login.php`, user).pipe(
            catchError(this.handleError)
        )
    }

    //login(user: any): Observable<> {
    //    return this.http
    //        .post<any>(`${APP_CONFIG.BASE_API_LINK.BASE}/login`, user)
    //        .pipe(
    //            map((res) => {
    //                this.currentUserSubject.next(res.data);
    //                return res;
    //            })
    //        );
    //}
}