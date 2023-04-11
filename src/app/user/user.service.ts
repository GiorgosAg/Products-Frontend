import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const USER_API = 'https://codingfactory.ddns.net/api/user';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  findAll() {
    return this.http.get(`${USER_API}/findall`);
  }
}
