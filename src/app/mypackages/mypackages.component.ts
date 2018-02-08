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
  shownPackages = '';
  messsages = [];

 getSendings(){
  this.shownPackages = "sending";
  this.http.get("http://localhost:8080/get_bookings?username=demoSender").subscribe(data => this.sendings = JSON.parse(JSON.stringify(data)).content);
 }
 getTransferings(){
  this.http.get("http://localhost:8080//transfers?username=dummyTransfere").subscribe(
    data => this.transferings = JSON.parse(JSON.stringify(data)).content);
}
accept(transfering)
{
  console.log("accepting");
}
reject(transfering)
{
  console.log("rejectig");
}
ngOnInit() {
  this.getSendings();
  this.getTransferings()

}

}
