import { Register } from './register';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient) {}

  registerNewUser(newUser: Register) {
    return this.http.post('gatitobook-production-e0c7.up.railway.app/user/signup', newUser);
  }

  checkExistingUser(userName: string) {
    return this.http.get(`gatitobook-production-e0c7.up.railway.app/user/exists/${userName}`);
  }
}
