import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first,map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { LoginService } from '../login-service.service';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) {
    this.angForm = this.fb.group({
      UserName: ['', [Validators.required]],
      Password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  postdata(angForm1 : FormGroup) {
    this.loginService.userlogin(angForm1.value.UserName, angForm1.value.Password)
      .subscribe(
        data => {
          const redirect = this.loginService.redirectUrl ? this.loginService.redirectUrl : '/dashboard';
          this.router.navigate([redirect]);
        },
        error => {
          alert("User name or password is incorrect")
        });
  }

  get UserName() { return this.angForm.get('UserName'); }
  
  get Password() { return this.angForm.get('Password'); }
}
