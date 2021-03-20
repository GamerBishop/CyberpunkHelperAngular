import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Users } from '../classes/users';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  _UserConnected! : Users;
  redirectUrl: string ="/dashboard";
  baseUrl: string = "http://192.168.1.35/applijdr/";
  
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  
  constructor(private httpClient: HttpClient) { }

  public userlogin(UserName: string, Password: string) {
    alert(UserName)
    return this.httpClient.post<any>(this.baseUrl + 'Login.php', { UserName, Password })
      .pipe(map(Users => {
        this.setToken(Users.UserName);
        this._UserConnected = Users;
        this.getLoggedInName.emit(true);
        return Users;
      }));
  } 

  //token
  setToken(token: string) {
    localStorage.setItem('token', token);
  }
  getToken() {
    return localStorage.getItem('token');
  }
  deleteToken() {
    localStorage.removeItem('token');
  }
  isLoggedIn() {
    const usertoken = this.getToken();
    if (usertoken != null) {
      return true
    }
    return false;
  }
}