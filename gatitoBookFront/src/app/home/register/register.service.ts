import { Register } from './register';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient) {}

  registerNewUser(newUser: Register) {
    return this.http.post('http://localhost:3000/user/signup', newUser);
  }

  checkExistingUser(userName: string) {
    return this.http.get(`http://localhost:3000/user/exists/${userName}`);
  }
}
