import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Users } from 'src/classes/users';
import { AppRoutingModule } from './app-routing.module';
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
  userHere : boolean;
  UserRole : string;

  loginbtn: boolean;
  logoutbtn: boolean;

  constructor(private loginService: LoginService, private router : Router) {
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
      
      router.navigate(['login']);
    }

    this.userHere = this.loginService.getUserConnected();
    this.UserRole = this.loginService.getRole();
  }

  private changeName(name: boolean): void {
    this.logoutbtn = name;
    this.loginbtn = !name;
  }

  logout() {
    this.loginService.deleteUserConnected();
    this.loginService.deleteRole();
    window.location.href = window.location.href;
  }
}
