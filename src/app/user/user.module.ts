import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UsersListComponent } from './users-list/users-list.component';
import { UserService } from './user.service';

const routes: Routes = [{ path: 'list', component: UsersListComponent }];

@NgModule({
  declarations: [UsersListComponent],
  imports: [CommonModule, RouterModule.forChild(routes), HttpClientModule],
  providers: [UserService],
})
export class UserModule {}
