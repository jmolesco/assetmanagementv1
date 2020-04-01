import { Injectable } from '@angular/core';
import { modelInterface }  from './modelInterface'
import { Observable } from 'rxjs';
import {environment} from '@environment/environment';
import  {BaseRequestService, ChildRequestService, constantKeywords} from '@shared/shared.module';
import {urlInterface} from '@sharedInterface/urlInterface';
@Injectable({
  providedIn: 'root'
})
export class ModelService {

  //VARIABLES DECLARATION
  url:string;
  modelUrl:string=constantKeywords.model;

  constructor(private httpBaseRequest: BaseRequestService,
    private httpChildeRequest: ChildRequestService
    ) {    
    this.url = environment.url + this.modelUrl;
  }


  public addModel(model:modelInterface){
    let url = this.httpChildeRequest.urlGenerator(this.url);
    let response = this.httpBaseRequest.addResponseCall(url, model);
    return response;
  }

  public editModel(model:modelInterface){
    let url = this.httpChildeRequest.urlGenerator(this.url+"/"+model.id,);
    let response = this.httpBaseRequest.editResponseCall(url, model);
    return response;
  }
  public deleteModel(model:modelInterface){
    let url = this.httpChildeRequest.urlGenerator(this.url+"/"+model.id,);
    let response = this.httpBaseRequest.deleteResponseCall(url);
    return response;
  }
  public getAllModel(parameters):Observable<modelInterface>{
    let urlInputs:urlInterface = {
      url:this.url,
      currentPage:parameters.currentPage,
      showAll:parameters.showAll,
      searchBy:parameters.searchBy,
      keyword:parameters.keyword,
      orderBy:parameters.orderBy,
      orderType:parameters.orderType
    };  
    let url = this.httpChildeRequest.urlGeneratorGetAll(urlInputs);
    return this.httpBaseRequest.getResponseCall(url);
  }
  public getDetailViaIDModel(id:number):Observable<modelInterface>{
    let url = this.httpChildeRequest.urlGenerator(this.url+"/"+id,);  
    return this.httpBaseRequest.getResponseCall(url);
  }
}
