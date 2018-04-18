import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, NgModel} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { BodyComponentComponent } from './body-component/body-component.component';
import { FieldsComponentComponent } from './fields-component/fields-component.component';
import { AddressEntriesComponentComponent } from './address-entries-component/address-entries-component.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    BodyComponentComponent,
    FieldsComponentComponent,
    AddressEntriesComponentComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
