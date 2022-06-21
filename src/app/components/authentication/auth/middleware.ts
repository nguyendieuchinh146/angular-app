import { Injectable } from '@angular/core';
import {HttpRequest, HttpHandler, HttpInterceptor, HttpEvent} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {tap} from 'rxjs/operators';

@Injectable()
export class RedirectInterceptor implements HttpInterceptor {
    constructor(protected router: Router) {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(tap((response:any) => {
            if (response.status == 302) {
                localStorage.removeItem("token");
                this.router.navigate(['auth/login']);
            }
        }));
    }
}