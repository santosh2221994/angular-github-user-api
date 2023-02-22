import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent implements OnInit {
  constructor(private router: Router) {}

  history: any = [];
  ngOnInit() {
    console.log(JSON.parse(localStorage.getItem('History')));
    this.get();
  }
  get() {
    this.history = JSON.parse(localStorage.getItem('History'));
    this.history.sort((a: any, b: any) => {
      return <any>new Date(b.on) - <any>new Date(a.on);
    });
  }
  navigate(item) {
    this.router.navigate([`../${item.result.login}`]);
  }
  clear() {
    localStorage.setItem('History', JSON.stringify([]));
    this.get();
  }
}
