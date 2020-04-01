import { Injectable } from '@angular/core';
import { harddiskInterface }  from './harddiskInterface'
import { Observable } from 'rxjs';
import {environment} from '@environment/environment';
import  {BaseRequestService, ChildRequestService, constantKeywords} from '@shared/shared.module';
import {urlInterface} from '@sharedInterface/urlInterface';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HarddiskService {
 //VARIABLES DECLARATION
 url:string;
 harddiskUrl:string=constantKeywords.harddisk;

 constructor(private httpBaseRequest: BaseRequestService,
   private httpChildeRequest: ChildRequestService
   ) {    
   this.url = environment.url + this.harddiskUrl;
 }


 public addHardDisk(harddisk:harddiskInterface){
   let url = this.httpChildeRequest.urlGenerator(this.url);
   let response = this.httpBaseRequest.addResponseCall(url, harddisk);
   return response;
 }

 public editHardDisk(harddisk:harddiskInterface){
   let url = this.httpChildeRequest.urlGenerator(this.url+"/"+harddisk.id,);
   let response = this.httpBaseRequest.editResponseCall(url, harddisk);
   return response;
 }
 public deleteHardDisk(harddisk:harddiskInterface){
   let url = this.httpChildeRequest.urlGenerator(this.url+"/"+harddisk.id,);
   let response = this.httpBaseRequest.deleteResponseCall(url);
   return response;
 }
 public getAllHardDisk(parameters):Observable<harddiskInterface>{
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
 public getDetailViaIDHardDisk(id:number):Observable<harddiskInterface>{
   let url = this.httpChildeRequest.urlGenerator(this.url+"/"+id,);  
   return this.httpBaseRequest.getResponseCall(url);
 }
}