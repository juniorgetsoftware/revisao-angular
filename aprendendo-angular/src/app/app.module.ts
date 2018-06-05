import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {CardModule, DataTableModule, ButtonModule, InputMaskModule, InputTextModule, CalendarModule} from 'primeng/primeng';
import {InputTextareaModule} from 'primeng/primeng';

import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormCadastradoComponent } from './form-cadastrado/form-cadastrado.component';

import { FormsModule } from '@angular/forms';
import { AsideNavComponent } from './aside-nav/aside-nav.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FormCadastradoComponent,
    AsideNavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,

    DataTableModule,
    ButtonModule,
    InputMaskModule,
    InputTextModule,
    CardModule,
    CalendarModule,
    InputTextareaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
