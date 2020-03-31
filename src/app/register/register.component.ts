import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  serverStatus: any;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  handleSubmit({ username, email, passwords }: { username: string, email: string, passwords: any }) {
    this.userService.register(username, email, passwords.password, passwords.confirmPassword)
    .subscribe(
      () => {this.serverStatus = null; this.router.navigateByUrl('/home');},
      err => this.serverStatus = err['error']['message']);
  }

}
