import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'; 
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-mypackages',
  templateUrl: './mypackages.component.html',
  styleUrls: ['./mypackages.component.css']
})
export class MypackagesComponent implements OnInit {
  constructor(private http: HttpClient, public authService: AuthService) {}
  transferings;
  sendings;
  shownPackages = 'sendings';
  messsage;

 getSendings(){
  this.shownPackages = "sending";
  this.http.get("http://localhost:8080/get_bookings?username="+this.authService.getUserName()).subscribe(data =>  this.sendings = JSON.parse(JSON.stringify(data)).content);
 }
 getTransferings(){
  this.http.get("http://localhost:8080/transfers?username="+this.authService.getUserName()).subscribe(
    data => this.transferings = JSON.parse(JSON.stringify(data)).content);
}
accept(sendId)
{
  this.http.get("http://localhost:8080//update-booking/"+sendId+"/APPROVED").subscribe(
    data => this.messsage = JSON.parse(JSON.stringify(data)));
    this.getTransferings();
    this.getSendings();
}
reject(sendId)
{
  this.http.get("http://localhost:8080//update-booking/"+sendId+"/DISAPPROVED").subscribe(
    data => this.messsage = JSON.parse(JSON.stringify(data)));
    this.getTransferings();
    this.getSendings();
}
ngOnInit() {

  this.shownPackages = 'sendings';
  console.log(this.authService.getUserName());
  this.getSendings();
  this.getTransferings();
  console.log(this.sendings);
  console.log(this.transferings);

}

}
