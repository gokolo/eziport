import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Package } from '../package';

@Component({
  selector: 'app-Package',
  templateUrl: './Package.component.html',
  styleUrls: ['./Package.component.css']
})
export class PackageComponent {
  packages;

  constructor(private http: HttpClient) {
    this.http.get("http://localhost:8087/get_bookings?username=demoSender").subscribe((data) => this.packages = data);
   }

  //heroes => this.heroes = heroes


}