import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public authService: AuthService, private router: Router){

  }
  title = 'app';

  logout()
  {
    this.authService.unsetUserName();
    this.router.navigateByUrl("");
  }

  // openEventPage(event) {
  //   this.navCtrl.push(EventPage, { event: event});
  // }
}
