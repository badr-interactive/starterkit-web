import { Component, Input } from '@angular/core';
import { LoginService } from './login.service';
import { LoginSocialService } from './login.social.service';
import { Login, LoginSocial } from './login';

import { AuthService, SocialUser } from 'angular4-social-login';
import { FacebookLoginProvider, GoogleLoginProvider } from 'angular4-social-login';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css', '../../layout/auth.component.css'],
    providers: [LoginService]
})

export class LoginComponent {
    public login: Login;
    public loginSocial: LoginSocial;

    title = 'Login Form';
    alertClass = 'primary';
    alert: String;
    formValid: String;

    constructor (private loginService: LoginService,
      private authService: AuthService) {
        this.login = new Login();
        this.loginSocial = new LoginSocial();
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

    signInWithGoogle(): void {
      this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    }

    signInWithFB(): void {
      this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    }

    signOut(): void {
      this.authService.signOut();
    }

    private reset() {
        this.login.email = null;
        this.login.password = null;
    }
}
