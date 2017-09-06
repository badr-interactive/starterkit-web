import { Component, Input } from '@angular/core';
import { LoginService } from './login.service';
import { LoginSocialService } from './login.social.service';
import { Login, LoginSocial } from './login';
import { LoginGoogleComponent } from './login.google.component';
import { LoginFacebookComponent } from './login.facebook.component';

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

    constructor (private loginService: LoginService) {
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

    private reset() {
        this.login.email = null;
        this.login.password = null;
    }
}
