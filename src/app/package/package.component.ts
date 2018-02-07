import { Component, OnInit } from '@angular/core';
import { PACKAGES } from '../mock-packages';

@Component({
  selector: 'app-Package',
  templateUrl: './Package.component.html',
  styleUrls: ['./Package.component.css']
})
export class PackageComponent implements OnInit {
  packages = PACKAGES;

  constructor() { }

  ngOnInit() {
  }

}
