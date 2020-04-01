import { Injectable } from '@angular/core';
import { processorInterface }  from './processorInterface'
import { Observable } from 'rxjs';
import {environment} from '@environment/environment';
import  {BaseRequestService, ChildRequestService, constantKeywords} from '@shared/shared.module';
import {urlInterface} from '@sharedInterface/urlInterface';
@Injectable({
  providedIn: 'root'
})
export class ProcessorService {

  //VARIABLES DECLARATION
  url:string;
  processorUrl:string=constantKeywords.processor;

  constructor(private httpBaseRequest: BaseRequestService,
    private httpChildeRequest: ChildRequestService
    ) {    
    this.url = environment.url + this.processorUrl;
  }


  public addProcessor(processor:processorInterface){
    let url = this.httpChildeRequest.urlGenerator(this.url);
    let response = this.httpBaseRequest.addResponseCall(url, processor);
    return response;
  }

  public editProcessor(processor:processorInterface){
    let url = this.httpChildeRequest.urlGenerator(this.url+"/"+processor.id,);
    let response = this.httpBaseRequest.editResponseCall(url, processor);
    return response;
  }
  public deleteProcessor(processor:processorInterface){
    let url = this.httpChildeRequest.urlGenerator(this.url+"/"+processor.id,);
    let response = this.httpBaseRequest.deleteResponseCall(url);
    return response;
  }
  public getAllProcessor(parameters):Observable<processorInterface>{
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
  public getDetailViaIDProcessor(id:number):Observable<processorInterface>{
    let url = this.httpChildeRequest.urlGenerator(this.url+"/"+id,);  
    return this.httpBaseRequest.getResponseCall(url);
  }
}
