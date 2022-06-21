import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {routing} from './crm.routing';
import { NgxEchartsModule } from 'ngx-echarts';

import {CrmComponent} from './crm.component';
import {AuthService} from '../authentication/auth/auth.service';
import {AuthGuardService as AuthGuard} from '../authentication/auth/auth-guard.service';
import { JwtHelperService, JWT_OPTIONS  } from '@auth0/angular-jwt';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { TopBarComponent } from '../layouts/top-bar/top-bar.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { ChartComponent } from './chart/chart.component';
import { ZippyMultislotComponent } from './zippy-multislot/zippy-multislot.component';
import {SharedModule} from '../../shared/shared.module';
import { QuestionService } from '../../shared/elements/dynamic-form/question.service';
import { ProductService } from './product.service';

import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {RedirectInterceptor} from '../authentication/auth/middleware';

@NgModule({
  declarations: [
    CrmComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductAlertsComponent,
    TopBarComponent,
    CartComponent,
    ShippingComponent,
    ChartComponent,
    ZippyMultislotComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
    SharedModule
  ],
  providers: [
    AuthService,AuthGuard,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService, QuestionService,ProductService,
    { provide: HTTP_INTERCEPTORS, useClass: RedirectInterceptor, multi: true }
  ],
})
export class CrmModule {}