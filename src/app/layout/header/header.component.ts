import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit  {
  user_name = localStorage.getItem('name');
  user_email = localStorage.getItem('email');
  user_photo = localStorage.getItem('photo');
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/login';
  }

  ngOnInit() {
  }

  logout () {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('name');
    localStorage.removeItem('photo');
    window.location.href = this.returnUrl;
  }
}
