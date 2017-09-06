import { Component } from '@angular/core';

declare var window: any;
declare var FB: any;

@Component({
  selector: 'app-facebook-login',
  template: `
  <div class="fb-login-button"
  data-max-rows="1"
  data-size="large"
  data-width="240"
  data-button-type="continue_with"
  data-show-faces="false"
  data-auto-logout-link="false"
  data-use-continue-as="false"></div>
  `
})

export class FacebookLoginComponent {
  private facebookApiId = '106034073373462';
  private facebookApiVersion = 'v2.9';

  constructor() {
    (function(d, s, id){
      let js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return; }
      js = d.createElement(s); js.id = id;
      js.src = '//connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
      window.fbAsyncInit = () => {
        console.log('fbasyncinit');

        FB.init({
            appId            : this.facebookApiId,
            version          : this.facebookApiVersion,
            autoLogAppEvents : true,
            xfbml            : true,
        });
        FB.AppEvents.logPageView();
      };
  }

}
