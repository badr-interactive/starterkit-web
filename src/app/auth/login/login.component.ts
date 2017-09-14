import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { LoginService } from './login.service';
import { LoginSocialService } from './login.social.service';
import { QuoteService } from '../../quote/quote.service';
import { Quote } from '../../quote/quote';
import { Login, LoginSocial } from './login';

import { AuthService, SocialUser } from 'angular4-social-login';
import { FacebookLoginProvider, GoogleLoginProvider } from 'angular4-social-login';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css', '../../layout/auth.component.css'],
    providers: [LoginService, LoginSocialService, QuoteService]
})

export class LoginComponent {
    public login: Login;
    public loginSocial: LoginSocial;
    public quote: Quote;

    alertClass = 'primary';
    alert: String;
    returnUrl: string;

    constructor (
      private route: ActivatedRoute,
      private router: Router,
      private loginService: LoginService,
      private loginSocialService: LoginSocialService,
      private authService: AuthService,
      private quoteService: QuoteService) {
        this.login = new Login();
        this.loginSocial = new LoginSocial();
        this.quote = new Quote();

        this.getQuote();
        this.logout();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    doLogin(): void {
        this.loginService.postLogin(this.login)
            .subscribe(response => {
                if (response.success === true) {
                    this.reset();
                    this.alertClass = 'success';
                    this.alert = response.message;
                    localStorage.setItem('access_token', response.data.access_token);
                    localStorage.setItem('email', response.data.email);
                    localStorage.setItem('name', response.data.name);
                    localStorage.setItem('photo', response.data.photo);

                    window.location.href = this.returnUrl;
                    // this.router.navigate([this.returnUrl]);
                }
            },
            error => {
              this.alertClass = 'danger';
              this.alert = error.error.message;
              this.login.password = null;
            });
    }

    doLoginSocial(loginSocial: LoginSocial): void {
      this.loginSocialService.postLogin(loginSocial)
      .subscribe(response => {
          if (response.success === true) {
              this.reset();
              this.alertClass = 'success';
              this.alert = response.message;
          }
      },
      error => {
        this.alertClass = 'danger';
        this.alert = error.error.message;
        this.login.password = null;
      });
    }

    signInWithGoogle(): void {
      this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
      this.doLoginSocial(this.loginSocial);
    }

    signInWithFB(): void {
      this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
      this.doLoginSocial(this.loginSocial);
    }

    signOut(): void {
      this.authService.signOut();
    }

    getQuote(): void {
      this.quoteService.getQuote(this.quote)
                        .subscribe(response => {
                          this.quote = response[0];
                        });
    }

    logout () {
      localStorage.removeItem('access_token');
    }

    private reset() {
        this.login.email = null;
        this.login.password = null;
    }
}
