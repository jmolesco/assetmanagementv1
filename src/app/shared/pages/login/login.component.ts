import { Component, OnInit } from '@angular/core';
import {credentialInterface } from '@sharedInterface/credentialInterface';
import { LoginService } from './login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { NgZone } from '@angular/core'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username:string;
  password:string;
  loading = false;
  returnUrl: string;
  errStatus:boolean = false;
  errMessage:string;
  constructor(
    private httpService:LoginService,
    private route: ActivatedRoute,
    private router: Router,
    private zone:NgZone
    
  ) {
        // redirect to home if already logged in
        if (this.httpService.currentUserValue) {
          console.log("if here in currentUserValue");
          this.router.navigate(['/']);
      }

   }

  ngOnInit(): void {
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        
  }
  submitLogIn():void{
    this.loading = true;
    let data:credentialInterface = {
      userName:this.username,
      password:this.password,    
    };
    console.log(this.route.snapshot.queryParams['returnUrl']);
    this.httpService.login(data).pipe(first()).subscribe(
      success => { 
        //console.log(success["userName"]);
        let datas = {
          currentUser: success["userName"],
          token:success["token"],
          fullName: success["fullName"],
          id:success["id"]
        }
        localStorage.setItem('currentUser', JSON.stringify(datas));
        this.zone.run(() => this.router.navigate([this.returnUrl]));
        //this.router.navigateByUrl(this.returnUrl);
        //this.router.navigate([this.returnUrl]);
        // this.router.navigate(['/dashboard']);
        //console.log(this.router.url);
        window.location.href = this.returnUrl 
      },
      error =>  { 
        this.loading= false;
        this.errMessage = error.errorMsg;
        this.errStatus = error.status;
        console.log(error) 
      } 
    );

  }
}
