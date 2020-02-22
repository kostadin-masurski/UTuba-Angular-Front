import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  constructor(private userService: UserService) { }

  get isLogged() {
    return this.userService.isLogged;
  }

  handleLogin({ username, password }: { username: string, password: string }) {
    this.userService.login(username, password);
  }

  logout() {
    this.userService.logout();
  }

}
