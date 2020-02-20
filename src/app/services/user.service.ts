import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isLogged: boolean;

  constructor(private router: Router) { }

  login() {
    this.isLogged = true;
  }

  logout() {
    this.isLogged = false;
    this.router.navigateByUrl('/');
  }
}
