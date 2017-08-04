import { Component } from "@angular/core";
import { LoginService } from "./login.service";
import { Login } from "./login";

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css', './login.reset.css'],
    providers: [LoginService]
})

export class LoginComponent {
    public login: Login;
    title = "Starterkit Login";
    errorMessage: String;
    constructor (private loginService: LoginService) {
        this.login = new Login();
    }

    doLogin(): void {
        console.log(this.login);
        this.loginService.postLogin(this.login)
            .subscribe(response => {
                console.log(response);
                this.reset();
            },
            error => this.errorMessage = <any>error);
    }

    private reset() {
        this.login.email = null;
        this.login.password = null;
    }
}