import { Component } from '@angular/core';
import { Users } from 'src/classes/users';
import { LoginService } from './login-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'La Fange de Night City';
  subtitle = 'Choisis la meilleure alternative pour survivre';

  _UserConnected!: Users;

  loginbtn: boolean;
  logoutbtn: boolean;

  constructor(private loginService: LoginService) {
    loginService.getLoggedInName.subscribe(name => {
      this.changeName(name);
      this._UserConnected = this.loginService._UserConnected;
    }
    );
    if (this.loginService.isLoggedIn()) {

      console.log("loggedin");
      this.loginbtn = false;
      this.logoutbtn = true
    }
    else {
      this.loginbtn = true;
      this.logoutbtn = false
    }
  }

  private changeName(name: boolean): void {
    this.logoutbtn = name;
    this.loginbtn = !name;
  }

  logout() {
    this.loginService.deleteToken();
    window.location.href = window.location.href;
  }
}
