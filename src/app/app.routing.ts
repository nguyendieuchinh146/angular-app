import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {AppModule} from './app.module';
import { LoginComponent } from './components/authentication/login/login.component';

// noinspection TypeScriptValidateTypes
export const routing = RouterModule.forRoot([
    { path: '',
        component: AppComponent,
        children: [
            { path: '', redirectTo: 'auth', pathMatch: 'full' },
            {
                path: 'auth',
                loadChildren: () => import('./components/authentication/authentication.module').then(x => x.AuthenticationModule)

            },
            {
                path: 'crm',
                    loadChildren: () =>import('./components/crm/crm.module').then((m) => m.CrmModule,
            ),
            },
            { path: '**', redirectTo: 'auth' },
        ],
    }
])