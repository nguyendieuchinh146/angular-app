import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgxEchartsModule } from 'ngx-echarts';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { ChartComponent } from './chart/chart.component';
import { ZippyMultislotComponent } from './zippy-multislot/zippy-multislot.component';
import { AuthenticationModule } from './components/authentication/authentication.module';
import { routing} from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
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
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
    AuthenticationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
