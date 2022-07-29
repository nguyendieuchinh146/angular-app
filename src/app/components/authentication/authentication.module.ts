import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {routing} from './authentication.routing';

import {AuthenticationComponent} from './authentication.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    declarations: [
        AuthenticationComponent,
        LoginComponent,
        RegisterComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        routing,
        SharedModule
    ],
    providers: [],
})
export class AuthenticationModule {}
