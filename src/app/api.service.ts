import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Octokit, App } from 'octokit';

@Injectable()
export class ApiService {
  apiURL = 'https://api.github.com/users';
  octokit;
  constructor(private http: HttpClient) {
    this.octokit = new Octokit({
      auth: `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`,
    });

    this.getAuthenticated();
  }
  async getAuthenticated() {
    const {
      data: { login },
    } = await this.octokit.rest.users.getAuthenticated();
    console.log('Hello, %s', login);
  }
  // Get all users
  getAllUsers() {
    return this.http.get(`${this.apiURL}`);
  }
  // octokit = new Octokit({});

  get(username: string) {
    return new Promise((resolve, reject) => {
      this.octokit.request(`GET /users/${username}`, {}).then(
        (e: any) => {
          resolve(e.data);
        },
        (err) => {
          reject(err);
        }
      );
    });
  }
  getRepos(username: string) {
    return new Promise((resolve, reject) => {
      this.octokit.request(`GET /users/${username}/repos`, {}).then(
        (e: any) => resolve(e.data),
        (err) => {
          reject(err);
        }
      );
    });
  }
  getGists(username: string) {
    return new Promise((resolve, reject) => {
      this.octokit.request(`GET /users/${username}/gists`, {}).then(
        (e: any) => resolve(e.data),
        (err) => {
          reject(err);
        }
      );
    });
  }
}
