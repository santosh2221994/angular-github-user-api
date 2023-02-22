import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  user: any;
  param: any;
  tab: any = 1;
  repos: any;
  constructor(private api: ApiService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.param = params.get('user');
      this.get();
    });
  }
  get() {
    this.api.get(this.param).then(
      (res) => {
        this.user = res;
      },
      (err) => {}
    );
  }
  getRepos() {
    this.api.getRepos(this.param).then(
      (res) => {
        console.log(res)

        this.repos = res;
      },
      (err) => {}
    );
  }
}
