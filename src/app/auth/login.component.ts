import { Component, Input } from '@angular/core';
import { LoginService } from './login.service';
import { Login } from './login';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css', '../layout/auth.component.css'],
    providers: [LoginService]
})

export class LoginComponent {
    public login: Login;
    @Input() public alerts: Array<string> = [];
    title = 'Login Form';
    alertClass = 'primary';
    alert: String;
    errorMessage: String;

    constructor (private loginService: LoginService) {
        this.login = new Login();
    }

    doLogin(): void {
        this.loginService.postLogin(this.login)
            .subscribe(response => {
              console.log(response);
              if (response.success === true) {
                this.reset();
              } else {
                this.alertClass = 'danger';
                this.alert = response.message;
                this.login.password = null;
              }
            },
            error => this.errorMessage = <any>error);
    }

    private reset() {
        this.login.email = null;
        this.login.password = null;
    }
}
