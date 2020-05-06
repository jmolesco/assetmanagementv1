import { Component, OnInit } from '@angular/core';
import { LoginService } from '@sharedPages/login/login.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentUser;
  fullName:string;
  constructor(
    private httpService:LoginService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.currentUser = this.httpService.currentUserValue;
    this.fullName = this.currentUser.fullName;
  }

  logOutUser():void{
    this.httpService.logout();
    this.router.navigate(['/login']);
  }
}
