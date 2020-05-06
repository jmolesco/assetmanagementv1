import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {credentialInterface } from '@sharedInterface/credentialInterface';
import { LoginService} from '@sharedPages/login/login.service'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Asset Management System V1';
  currentUser: credentialInterface;
  constructor(
    private router:Router,
    private httpLogInService: LoginService
  ){
    console.log(this.currentUser);
    this.httpLogInService.currentUser.subscribe(x=> this.currentUser=x);
  }

  logout(){
    this.httpLogInService.logout();
    this.router.navigate(['/login']);
  }
}
