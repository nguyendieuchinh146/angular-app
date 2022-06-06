import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {CrmModule} from './crm.module';
import {CrmComponent} from './crm.component';
import {AuthGuardService as AuthGuard} from '../authentication/auth/auth-guard.service';
import {ProductListComponent} from './product-list/product-list.component';
import {CartComponent} from './cart/cart.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {ShippingComponent} from './shipping/shipping.component';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: 'crm',
    component: CrmComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'product-list', pathMatch: 'full' },
      {
        path: 'product-list',
        component: ProductListComponent,
      },
      {
        path: 'cart',
        component: CartComponent,
      },
      {
        path: 'products/:productId',
        component: ProductDetailComponent,
      },
      {
        path: 'shipping',
        component: ShippingComponent,
      },
    ],
  },
];

export const routing: ModuleWithProviders<CrmModule> = RouterModule.forChild(
  routes
);
