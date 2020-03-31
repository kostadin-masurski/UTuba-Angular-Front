import { Injectable, Renderer2 } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, shareReplay } from 'rxjs/operators';
import { User } from '../shared/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser: User;

  get loggedUser() { return sessionStorage.getItem('username'); }

  get isLogged() { return !!this.currentUser; }

  // authCompleted$ = this.http.get('auth').pipe(shareReplay(1));

  // constructor(private http: HttpClient) {
  //   this.authCompleted$.subscribe((user: any) => {
  //     this.currentUser = user;
  //   }, () => {
  //     this.currentUser = null;
  //   });
  // }

  constructor(private http: HttpClient) {}

  login( username: string, password: string) {
    let loginFormData = new FormData;
    loginFormData.append("username", username);
    loginFormData.append("password", password);
    return this.http.post('http://localhost:8080/api/login', loginFormData).pipe(tap((user: any) => {
      this.currentUser = user;
      sessionStorage.setItem('username', this.currentUser.username);
      sessionStorage.setItem('email', this.currentUser.email);
    }));
  }

  register(username: string, email: string, password: string, confirmPassword: string) {
    let registerFormData = new FormData;
    registerFormData.append("username", username);
    registerFormData.append("email", email);
    registerFormData.append("password", password);
    registerFormData.append("confirmPassword", confirmPassword);
    return this.http.post('http://localhost:8080/api/register', registerFormData);
  }

  logout() { this.currentUser = null; sessionStorage.clear(); }
}