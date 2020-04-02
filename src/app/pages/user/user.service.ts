import { Injectable } from '@angular/core';
import { userInterface }  from './userInterface'
import { Observable } from 'rxjs';
import {environment} from '@environment/environment';
import  {BaseRequestService, ChildRequestService, constantKeywords} from '@shared/shared.module';
import {urlInterface} from '@sharedInterface/urlInterface';
@Injectable({
  providedIn: 'root'
})
export class UserService {
 //VARIABLES DECLARATION
 url:string;
 userUrl:string=constantKeywords.user;

 constructor(private httpBaseRequest: BaseRequestService,
  private httpChildeRequest: ChildRequestService
  ) {    
  this.url = environment.url + this.userUrl;
}


public addUser(user:userInterface){
  let url = this.httpChildeRequest.urlGenerator(this.url);
  let response = this.httpBaseRequest.addResponseCall(url, user);
  return response;
}

public editUser(user:userInterface){
  let url = this.httpChildeRequest.urlGenerator(this.url+"/"+user.id,);
  let response = this.httpBaseRequest.editResponseCall(url, user);
  return response;
}
public deleteUser(user:userInterface){
  let url = this.httpChildeRequest.urlGenerator(this.url+"/"+user.id,);
  let response = this.httpBaseRequest.deleteResponseCall(url);
  return response;
}
public getAllUser(parameters):Observable<userInterface>{
  let urlInputs:urlInterface = {
    url:this.url,
    currentPage:parameters.currentPage,
    showAll:parameters.showAll,
    searchBy:parameters.searchBy,
    keyword:parameters.keyword,
    orderBy:parameters.orderBy,
    orderType:parameters.orderType,
    filterBy:parameters.filterBy
  };  
  let url = this.httpChildeRequest.urlGeneratorGetAll(urlInputs);
  return this.httpBaseRequest.getResponseCall(url);
}
public getDetailViaIDUser(id:number):Observable<userInterface>{
  let url = this.httpChildeRequest.urlGenerator(this.url+"/"+id,);  
  return this.httpBaseRequest.getResponseCall(url);
}
}
