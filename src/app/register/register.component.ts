import { Component, Input } from '@angular/core';

import { Register } from './register';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css', '../layout/auth.component.css'],
    // providers: [RegisterService]
})

export class RegisterComponent {
    public register: Register;

    title = 'Register Form';
    alertClass = 'primary';
    alert: String;
    errorMessage: String;

    constructor () {
        this.register = new Register();
    }

    // doLogin(): void {
    //     this.loginService.postLogin(this.login)
    //         .subscribe(response => {
    //           if (response.success === true) {
    //             this.reset();
    //           } else {
    //             this.alertClass = 'danger';
    //             this.alert = response.message;
    //             this.login.password = null;
    //           }
    //         },
    //         error => this.errorMessage = <any>error);
    // }

    private reset() {
        // this.login.email = null;
        // this.login.password = null;
    }
}
