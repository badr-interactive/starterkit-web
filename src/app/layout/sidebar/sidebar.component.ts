import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  user_name = localStorage.getItem('name');
  user_email = localStorage.getItem('email');
  user_photo = localStorage.getItem('photo');
  constructor() {
  }

  ngOnInit() {
  }

}
