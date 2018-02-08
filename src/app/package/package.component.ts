import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Router, Routes } from '@angular/router';

import { Package } from '../package';

@Component({
  selector: 'app-Package',
  templateUrl: './Package.component.html',
  styleUrls: ['./Package.component.css']
})
export class PackageComponent {
  packages;

  constructor(private http: HttpClient, private router: Router) {
    this.getPackages();
   }

   getPackages() {
    this.http.get("http://localhost:8087/get_bookings?username=demoSender").subscribe((data) => this.packages = data);

   }

   approvePackage(package_id) {
    this.http.get("http://localhost:8087//update-booking/"+package_id+"/APPROVED").subscribe(data => console.log("Package "+package_id+" approved"));
    this.getPackages();
    this.router.navigateByUrl(`/admin`);

   }
  
   disapprovePackage(package_id) {
    this.http.get("http://localhost:8087//update-booking/"+package_id+"/DISAPPROVE").subscribe(data => console.log("Package "+package_id+" disapproved"));
    this.getPackages();
    this.router.navigateByUrl(`/admin`);
   }

}