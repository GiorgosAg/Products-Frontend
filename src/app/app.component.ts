import { Component } from '@angular/core';
import { usersMenu, productsMenu } from 'shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Products Frontend';
  usersMenu = usersMenu;
  productsMenu = productsMenu;

  // usersMenu: MenuItem[] = [
  //   { text: 'List all Users', link: 'user/list' },
  //   { text: 'Insert a User', link: 'not-implemented-yet' },
  //   { text: 'Delete a User', link: 'not-implemented-yet' },
  //   { text: 'Update a User', link: 'not-implemented-yet' },
  // ];
  // productsMenu: MenuItem[] = [
  //   { text: 'List all Products', link: 'not-implemented-yet' },
  //   { text: 'Insert a Product', link: 'not-implemented-yet' },
  //   { text: 'Delete a Product', link: 'not-implemented-yet' },
  //   { text: 'Update a Product', link: 'not-implemented-yet' },
  // ];
}
