import { Component, Input } from '@angular/core';
import { LoginService } from './login.service';
import { Login } from './login';
import { GoogleLoginComponent } from './login.google.component';

declare var window: any;
declare var FB: any;

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css', '../../layout/auth.component.css'],
    providers: [LoginService]
})

export class LoginComponent {
    public login: Login;

    private facebookApiId = '106034073373462';
    private facebookApiVersion = 'v2.9';

    title = 'Login Form';
    alertClass = 'primary';
    alert: String;
    formValid: String;

    constructor (private loginService: LoginService) {
        this.login = new Login();

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

    doLogin(): void {
        this.loginService.postLogin(this.login)
            .subscribe(response => {
                if (response.success === true) {
                    this.reset();
                    this.formValid = 'is-valid';
                }
            },
            error => {
              this.formValid = 'is-invalid';
              this.alertClass = 'danger';
              this.alert = error.error.message;
              this.login.password = null;
            });
    }

    private reset() {
        this.login.email = null;
        this.login.password = null;
    }
}
