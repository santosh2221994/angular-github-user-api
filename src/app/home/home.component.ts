import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  username: any = null;
  user: any;
  result: boolean;
  constructor(private api: ApiService) {}

  ngOnInit() {
    console.log('home');
  }
  get() {
    console.log(this.username);
    if (this.username == null || this.username == '') {
      const conf = confirm(
        'No username found at input field. Press OK to get all users'
      );
      conf == true ? this.getusers() : '';
    } else {
      let searches = localStorage.getItem('History')
        ? JSON.parse(localStorage.getItem('History'))
        : [];
      this.api.get(this.username).then(
        (res) => {
          console.log(res);
          this.user = res;
          searches.push({
            search: this.username,
            on: new Date(),
            result: this.user,
          });
          localStorage.setItem('History', JSON.stringify(searches));
          this.result = true;
        },
        (err) => {
          if (err.status == 404) {
            this.user = null;
            searches.push({
              search: this.username,
              on: new Date(),
              result: null,
            });
            localStorage.setItem('History', JSON.stringify(searches));
            this.result = false;
          }
        }
      );
    }
  }
  getusers() {
    this.api.getAllUsers().subscribe((res) => {
      console.log(res);
    });
    // this.api.get();
  }
}
