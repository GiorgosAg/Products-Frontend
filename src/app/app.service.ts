import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, UserAPIList, UserAPIUserOne } from 'shared';
import { BehaviorSubject } from 'rxjs';

const USER_API = 'https://codingfactory.ddns.net/api/user';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private loggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.loggedInSubject.asObservable;
  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    this.http
      .get<UserAPIUserOne>(`${USER_API}/findone/${username}`)
      .subscribe((user) => {
        this.loggedInSubject.next(user.data.password === password);
      });
  }
}
