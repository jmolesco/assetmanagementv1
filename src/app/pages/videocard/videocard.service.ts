import { Injectable } from '@angular/core';
import { videocardInterface }  from './videocardInterface'
import { Observable } from 'rxjs';
import {environment} from '@environment/environment';
import  {BaseRequestService, ChildRequestService, constantKeywords} from '@shared/shared.module';
import {urlInterface} from '@sharedInterface/urlInterface';
@Injectable({
  providedIn: 'root'
})
export class VideocardService {

  //VARIABLES DECLARATION
  url:string;
  videocardUrl:string=constantKeywords.videocard;

  constructor(private httpBaseRequest: BaseRequestService,
    private httpChildeRequest: ChildRequestService
    ) {    
    this.url = environment.url + this.videocardUrl;
  }


  public addVideoCard(videocard:videocardInterface){
    let url = this.httpChildeRequest.urlGenerator(this.url);
    let response = this.httpBaseRequest.addResponseCall(url, videocard);
    return response;
  }

  public editVideoCard(videocard:videocardInterface){
    let url = this.httpChildeRequest.urlGenerator(this.url+"/"+videocard.id,);
    let response = this.httpBaseRequest.editResponseCall(url, videocard);
    return response;
  }
  public deleteVideoCard(videocard:videocardInterface){
    let url = this.httpChildeRequest.urlGenerator(this.url+"/"+videocard.id,);
    let response = this.httpBaseRequest.deleteResponseCall(url);
    return response;
  }
  public getAllVideoCard(parameters):Observable<videocardInterface>{
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
  public getDetailViaIDVideoCard(id:number):Observable<videocardInterface>{
    let url = this.httpChildeRequest.urlGenerator(this.url+"/"+id,);  
    return this.httpBaseRequest.getResponseCall(url);
  }
}
