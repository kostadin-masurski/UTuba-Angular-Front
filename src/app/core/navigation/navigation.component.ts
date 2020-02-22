import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  constructor(private userService: UserService, private router: Router) { }

  get isLogged() {
    return this.userService.fakeIsLogged;
  }

  handleLogin({ username, password }: { username: string, password: string }) {
    this.userService.login(username, password);
  }

  login() {
    this.userService.fakeLogin();
    this.router.navigateByUrl('/home');
  }

  logout() {
    this.userService.fakeLogout();
    this.router.navigateByUrl('/');
  }

}
