import { Component, Input } from '@angular/core';
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
    providers: [LoginService, QuoteService]
})

export class LoginComponent {
    public login: Login;
    public loginSocial: LoginSocial;
    public quote: Quote;

    alertClass = 'primary';
    alert: String;

    constructor (private loginService: LoginService,
      private authService: AuthService,
      private quoteService: QuoteService) {
        this.login = new Login();
        this.loginSocial = new LoginSocial();
        this.quote = new Quote();

        this.getQuote();
    }

    doLogin(): void {
        this.loginService.postLogin(this.login)
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
    }

    signInWithFB(): void {
      this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
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

    private reset() {
        this.login.email = null;
        this.login.password = null;
    }
}
