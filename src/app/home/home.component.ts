import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Console } from '@angular/core/src/console';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(public authService: AuthService){

  }
  shownForm = 'send';
  sendClass = "active";
  transferClass = "";
  messsages = [];
  sendClick(){
    this.sendClass='active';
    this.transferClass='';
    this.shownForm = 'send';
  }

  transferClick(){
    this.transferClass='active';
    this.sendClass='';
    this.shownForm = 'transfer';
  }
  
  ngOnInit() {
     console.log(this.authService.getUserName());
  }
}
