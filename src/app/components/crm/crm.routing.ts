import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {CrmModule} from './crm.module';
import {CrmComponent} from './crm.component';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: 'crm',
    component: CrmComponent,
    //canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
];

export const routing: ModuleWithProviders<CrmModule> = RouterModule.forChild(
  routes
);
