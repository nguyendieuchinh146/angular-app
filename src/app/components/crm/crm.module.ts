import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {routing} from './crm.routing';

import {CrmComponent} from './crm.component';

@NgModule({
  declarations: [
    CrmComponent,
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
export class CrmModule {}