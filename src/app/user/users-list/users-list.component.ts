import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserAPIList } from '../user.interfaces';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    console.log('Starting "findall" API call');
    this.userService.findAll().subscribe({
      next: (apiData: UserAPIList) => {
        const { status, data } = apiData;
        console.log(status, data);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('API call completed');
      },
    });
  }
}
