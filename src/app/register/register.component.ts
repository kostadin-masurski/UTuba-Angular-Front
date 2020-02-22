import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  handleSubmit({ username, email, password, confirmPassword }: { username: string, email: string, password: string, confirmPassword: string }) {
    this.userService.register(username, email, password, confirmPassword)
    .subscribe(() => {
      this.router.navigate(['/']);
    }, console.error);
  }

}
