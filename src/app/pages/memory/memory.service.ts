import { Injectable } from '@angular/core';
import { memoryInterface }  from './memoryInterface'
import { Observable } from 'rxjs';
import {environment} from '@environment/environment';
import  {BaseRequestService, ChildRequestService, constantKeywords} from '@shared/shared.module';
import {urlInterface} from '@sharedInterface/urlInterface';
@Injectable({
  providedIn: 'root'
})
export class MemoryService {
 //VARIABLES DECLARATION
 url:string;
 memoryUrl:string=constantKeywords.memory;

 constructor(private httpBaseRequest: BaseRequestService,
   private httpChildeRequest: ChildRequestService
   ) {    
   this.url = environment.url + this.memoryUrl;
 }


 public addMemory(memory:memoryInterface){
   let url = this.httpChildeRequest.urlGenerator(this.url);
   let response = this.httpBaseRequest.addResponseCall(url, memory);
   return response;
 }

 public editMemory(memory:memoryInterface){
   let url = this.httpChildeRequest.urlGenerator(this.url+"/"+memory.id,);
   let response = this.httpBaseRequest.editResponseCall(url, memory);
   return response;
 }
 public deleteMemory(memory:memoryInterface){
   let url = this.httpChildeRequest.urlGenerator(this.url+"/"+memory.id,);
   let response = this.httpBaseRequest.deleteResponseCall(url);
   return response;
 }
 public getAllMemory(parameters):Observable<memoryInterface>{
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
 public getDetailViaIDMemory(id:number):Observable<memoryInterface>{
   let url = this.httpChildeRequest.urlGenerator(this.url+"/"+id,);  
   return this.httpBaseRequest.getResponseCall(url);
 }
}
