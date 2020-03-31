import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  serverStatus: String;

  constructor(private userService: UserService, private router: Router) { }

  get loggedUser() {
    return this.userService.loggedUser;
  }

  handleLogin({ username, password }: { username: string, password: string }) {
    this.userService.login(username, password)
    .subscribe(
      () => {this.serverStatus = null; this.router.navigateByUrl('/home');},
      err => this.serverStatus = err['error']['message'])
  }

  logout() {
    this.userService.logout();
    this.router.navigateByUrl('/');
  }

}
