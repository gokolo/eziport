import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public authService: AuthService){

  }
  title = 'app';

  logout()
  {
    this.authService.unsetUserName();
  }

  // openEventPage(event) {
  //   this.navCtrl.push(EventPage, { event: event});
  // }
}
