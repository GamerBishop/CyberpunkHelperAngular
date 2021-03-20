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
  
  constructor(private httpClient: HttpClient) { 
    this.setRole("");
    this.setUserConnected(false);
  }

  public userlogin(UserName: string, Password: string) {
    alert(UserName)
    return this.httpClient.post<any>(this.baseUrl + 'Login.php', { UserName, Password })
      .pipe(map(Users => {
        this.setRole(Users.Role);
        this._UserConnected = Users;
        this.getLoggedInName.emit(true);
        return Users;
      }));
  } 

  //Role
  public setRole(Role: string) {
    localStorage.setItem('Role', Role);
  }
  public getRole() : string{
    return (localStorage.getItem('Role') as string).toString();
  }
  public deleteRole() {
    localStorage.removeItem('Role');
  }

  //UserConnected
  public setUserConnected(UserConnected: boolean) {
    localStorage.setItem('UserConnected', UserConnected.toString());
  }
  public getUserConnected() : boolean{
    return (localStorage.getItem('UserConnected')=="true");
  }
  public deleteUserConnected() {
    localStorage.removeItem('UserConnected');
  }

  isLoggedIn() {
    const _userHere = this.getUserConnected();
    return _userHere;
  }
}