import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthenticationComponent} from './authentication.component';
import {AuthenticationModule} from './authentication.module';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
    {
        path: '',
        component: AuthenticationComponent,
        children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            {
                path: 'login',
                component: LoginComponent,
            },
            {
                path: 'register',
                component: RegisterComponent,
            },
        ],
    },
];

export const routing: ModuleWithProviders<AuthenticationModule> = RouterModule.forChild(
    routes
);
