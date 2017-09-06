import { Component, AfterViewInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

declare const gapi: any;

@Component({
  selector: 'app-google-login',
  template: '<div id="my-signin2"></div>'
})

export class GoogleLoginComponent implements AfterViewInit {
  public auth2: any;
  private googleApiId = '242838104151-uq8hka2i0f0p2cpon74v2urtg7nm8d66.apps.googleusercontent.com';
  private scope = [
    'profile',
    'email',
  ].join(' ');

  constructor(private metaService: Meta) {
    this.metaService.addTag({
      name: 'google-signin-client_id', content: this.googleApiId
    });
  }

  public onSignIn(googleUser) {
    const profile = googleUser.getBasicProfile();
    console.log('Token || ' + googleUser.getAuthResponse().id_token);
    console.log('ID: ' + profile.getId());
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());
  }

  ngAfterViewInit() {
    gapi.signin2.render('my-signin2', {
      scope: 'profile email',
      width: 240,
      height: 50,
      longtitle: true,
      theme: 'light',
      onsuccess: param => this.onSignIn(param)
    });
  }
}
