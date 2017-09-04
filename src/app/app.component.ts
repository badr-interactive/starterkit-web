import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

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

  constructor (private metaService: Meta) {
    this.metaService.addTag({
      name: 'google-signin-client_id', content: '242838104151-uq8hka2i0f0p2cpon74v2urtg7nm8d66.apps.googleusercontent.com'
    });
  }

}
