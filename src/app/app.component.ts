import { Component, OnInit } from '@angular/core';
import { AuthService } from 'angular4-social-login';
import { SocialUser } from 'angular4-social-login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  private socialUser: SocialUser;
  public loggedIn: boolean;

  constructor(private authService: AuthService) {
    if (localStorage.getItem('token')) {
      this.loggedIn = true;
    }
  }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.socialUser = user;
      // this.loggedIn = (user != null);
      console.log(this.socialUser);
      console.log(this.loggedIn);
    });
  }

}
