import { Injectable } from '@angular/core';
import { PACKAGES } from './mock-packages';
import {Package } from './package';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { PackageComponent } from './Package/Package.component';

@Injectable()
export class PackageService {
  getPackages(): Observable<Package[]> {
    return of(PACKAGES);
  }

  constructor() { }

}
