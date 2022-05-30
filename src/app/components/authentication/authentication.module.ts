import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {routing} from './authentication.routing';

import {AuthenticationComponent} from './authentication.component';
import {LoginComponent} from '../../login/login.component';

@NgModule({
    declarations: [
        AuthenticationComponent,
        LoginComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        routing,
    ],
    providers: [],
})
export class AuthenticationModule {}
