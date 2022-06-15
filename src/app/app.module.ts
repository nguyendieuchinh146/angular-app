import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AuthenticationModule } from './components/authentication/authentication.module';
import { CrmModule } from './components/crm/crm.module';
import { routing} from './app.routing';
import {SharedModule} from './shared/shared.module';

import { ParentComponent } from './components/interaction/parent.compoent';
import { ChildComponent } from  './components/interaction/child.component';
import { SiblingComponent } from './components/interaction/sibling.compoent';
import { ChildListComponent } from './components/interaction/childlist.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    SiblingComponent,
    ChildListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    AuthenticationModule,
        CrmModule,
        SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
