import { Component } from '@angular/core';

import { LoginSocial } from './login';

declare var window: any;
declare var FB: any;

@Component({
  selector: 'app-facebook-login',
  template: `
  <div class="fb-login-button"
  data-max-rows="1"
  data-size="large"
  data-width="240"
  data-show-faces="false"
  data-auto-logout-link="false"
  data-use-continue-as="false"
  scope="public_profile,email"></div>
  `
})

export class LoginFacebookComponent {
  public loginSocial: LoginSocial;
  private facebookApiId = '106034073373462';
  private facebookApiVersion = 'v2.9';

  constructor() {
    this.loginSocial = new LoginSocial();

    (function(d, s, id){
      let js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return; }
      js = d.createElement(s); js.id = id;
      js.src = '//connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
      const that = this;
      window.fbAsyncInit = () => {
        FB.init({
            appId            : this.facebookApiId,
            version          : this.facebookApiVersion,
            autoLogAppEvents : true,
            xfbml            : true,
        });
        FB.AppEvents.logPageView();
        // Now that we've initialized the JavaScript SDK, we call
        // FB.getLoginStatus().  This function gets the state of the
        // person visiting this page and can return one of three states to
        // the callback you provide.  They can be:
        //
        // 1. Logged into your app ('connected')
        // 2. Logged into Facebook, but not your app ('not_authorized')
        // 3. Not logged into Facebook and can't tell if they are logged into
        //    your app or not.
        //
        // These three cases are handled in the callback function.

        that.checkLoginState();
      };
  }

  // This is called with the results from from FB.getLoginStatus().
  statusChangeCallback(response) {
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
      this.testAPI();
    } else {
      // The person is not logged into your app or we are unable to tell.
      console.log('not logged in');
    }
  }

  // This function is called when someone finishes with the Login
  // Button.  See the onlogin handler attached to it in the sample
  // code below.
  checkLoginState() {
    const that = this;
    FB.getLoginStatus(function(response) {
      that.statusChangeCallback(response);
    });
  }

  // Here we run a very simple test of the Graph API after login is
  // successful.  See statusChangeCallback() for when this call is made.
  testAPI() {
    FB.api('/me', function(response) {
      console.log('Facebook : ' + response.name);
    });
  }

  logout() {
    FB.logout();
  }
}
