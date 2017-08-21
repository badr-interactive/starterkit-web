import { Component } from '@angular/core';

import { Config } from './config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  {

  config: Config;

  title = 'app';

  color = 'accent';
  mode = 'indeterminate';
  value = 0;
  bufferValue = 100;

}
