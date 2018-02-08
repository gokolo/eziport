import { Injectable } from '@angular/core';
@Injectable()
export class AuthService {
  username;
  constructor() { 
  }
  setUserName(un)
  {
      this.username = un;
  }
  getUserName()
  {
    return this.username;
  }
}