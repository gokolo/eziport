import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../user';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router ) { }
  user = new User('', '');
  ngOnInit() {

  }

  setUser()
  {
    console.log(this.user);
    this.authService.setUserName(this.user.username);
    this.router.navigate(['home']);
  }

}
