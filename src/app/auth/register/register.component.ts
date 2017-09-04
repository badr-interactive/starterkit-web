import { Component, Input } from '@angular/core';
import { RegisterService } from './register.service';
import { Register } from './register';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css', '../../layout/auth.component.css'],
    providers: [RegisterService]
})

export class RegisterComponent {
    public register: Register;

    title = 'Register Form';
    alertClass = 'primary';
    alert: String;
    formValid: String;

    constructor (private RegisterService: RegisterService) {
        this.register = new Register();
    }

    doRegister(): void {
      this.RegisterService.postLogin(this.register)
          .subscribe(response => {
              if (response.success === true) {
                this.reset();
                this.formValid = 'is-valid';
                this.alertClass = 'success';
                this.alert = response.message;
              }
          },
          error => {
            this.formValid = 'is-invalid';
            this.alertClass = 'danger';
            this.alert = error.error.message;
            this.register.password = null;
            this.register.confirmation_password = null;
          });
  }

  private reset() {
      this.register.email = null;
      this.register.password = null;
      this.register.confirmation_password = null;
  }
}
