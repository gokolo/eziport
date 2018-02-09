import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {
  username;
  savedSearchInfo = {'from': '', 'to': '', 'by': ''};;

  constructor() {
  }

  setUserName(un) {
    this.username = un;
  }

  getUserName() {
    return this.username;
  }

  unsetUserName() {
    this.username = null;
  }

  addSearchInfo(from, to, by) {
    this.savedSearchInfo = {'from': from, 'to': to, 'by': by};
  }}
