import { Component, OnInit } from '@angular/core';
import { PACKAGES } from '../mock-packages';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {
  packages = PACKAGES;

  constructor() { }

  ngOnInit() {
  }

}
