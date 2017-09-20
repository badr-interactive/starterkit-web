import { Component, Input } from '@angular/core';
import { RegisterService } from './register.service';
import { Register } from './register';

import { QuoteService } from '../../quote/quote.service';
import { Quote } from '../../quote/quote';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css', '../../layout/auth.component.css'],
    providers: [RegisterService, QuoteService]
})

export class RegisterComponent {
    public register: Register;
    public quote: Quote;

    title = 'Register Form';
    alertClass = 'primary';
    alert: String;

    constructor (private RegisterService: RegisterService,
      private quoteService: QuoteService) {
        this.register = new Register();
        this.quote = new Quote();

        this.getQuote();
    }

    doRegister(): void {
      this.RegisterService.postLogin(this.register)
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
            this.register.password = null;
            this.register.confirmation_password = null;
          });
  }

  getQuote(): void {
    this.quoteService.getQuote(this.quote)
                      .subscribe(response => {
                        this.quote = response[0];
                      });
  }

  private reset() {
      this.register.email = null;
      this.register.password = null;
      this.register.confirmation_password = null;
  }
}
