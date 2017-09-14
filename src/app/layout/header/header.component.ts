import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit  {
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/login';
  }

  ngOnInit() {
  }

  logout () {
    localStorage.removeItem('access_token');
    window.location.href = this.returnUrl;
  }
}
