import { Injectable } from '@angular/core';
import {credentialInterface } from '@sharedInterface/credentialInterface';
import { BehaviorSubject, Observable } from 'rxjs';
import  {BaseRequestService, ChildRequestService, constantKeywords} from '@shared/shared.module';
import {environment} from '@environment/environment';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  
  //VARIABLES DECLARATION
  private currentUserSubject: BehaviorSubject<credentialInterface>;
  public currentUser: Observable<credentialInterface>;
  url:string;
  loginUrl:string=constantKeywords.login;


  constructor(
    private httpBaseRequest: BaseRequestService,
    private httpChildeRequest: ChildRequestService
    ) { 
    this.currentUserSubject = new BehaviorSubject<credentialInterface>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
    this.url = environment.url + this.loginUrl;
  }

  public get currentUserValue():credentialInterface {
    return this.currentUserSubject.value;
  }

  login(credentials:credentialInterface){
    //console.log(credentials);
    let url = this.httpChildeRequest.urlGenerator(this.url);
    //console.log(url);
    let response = this.httpBaseRequest.addResponseCall(url, credentials);
    return response;
  }

  logout(){
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
