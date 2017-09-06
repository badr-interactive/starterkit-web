import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import 'hammerjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './auth/login/login.component';
import { GoogleLoginComponent } from './auth/login/login.google.component';
import { FacebookLoginComponent } from './auth/login/login.facebook.component';

import { RegisterComponent } from './auth/register/register.component';

import { BaseMiddleware } from './middleware/base.middleware';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    GoogleLoginComponent,
    FacebookLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
