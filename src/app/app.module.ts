import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdInputModule, MdButtonModule, MdCheckboxModule, MdProgressBarModule } from '@angular/material';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import 'hammerjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from "./auth/login.component";

import { BaseMiddleware } from "./middleware/base.middleware";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MdInputModule,
    MdButtonModule, MdCheckboxModule,
    MdProgressBarModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: BaseMiddleware,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
