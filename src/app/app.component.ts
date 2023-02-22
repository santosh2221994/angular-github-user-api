import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor() {}

  ngOnInit() {
    console.log(`\n\n Created by Santosh Kumar Gupta \n\n\n`);
    // window.console.log = function () {};
  }
}
