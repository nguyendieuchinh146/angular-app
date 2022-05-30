import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {AppModule} from './app.module';
import { LoginComponent } from './login/login.component';

// noinspection TypeScriptValidateTypes
export const routing = RouterModule.forRoot([
    { path: '',
        component: AppComponent,
        children: [
            { path: '', component: LoginComponent },
            {
                path: 'auth',
                loadChildren: () => import('./components/authentication/authentication.module').then(x => x.AuthenticationModule)

            },
            { path: '**', redirectTo: 'auth' },
        ],
    }
])