import { Injectable } from '@angular/core';
import { manufacturerInterface }  from './manufacturerInterface'
import { Observable } from 'rxjs';
import {environment} from '@environment/environment';
import  {BaseRequestService, ChildRequestService, constantKeywords} from '@shared/shared.module';
import {urlInterface} from '@sharedInterface/urlInterface';
@Injectable({
  providedIn: 'root'
})
export class ManufacturerService {

  //VARIABLES DECLARATION
  url:string;
  manufacturerUrl:string=constantKeywords.manufacturer;

  constructor(private httpBaseRequest: BaseRequestService,
    private httpChildeRequest: ChildRequestService
    ) {    
    this.url = environment.url + this.manufacturerUrl;
  }


  public addManufacturer(manufacturer:manufacturerInterface){
    let url = this.httpChildeRequest.urlGenerator(this.url);
    let response = this.httpBaseRequest.addResponseCall(url, manufacturer);
    return response;
  }

  public editManufacturer(manufacturer:manufacturerInterface){
    let url = this.httpChildeRequest.urlGenerator(this.url+"/"+manufacturer.id,);
    let response = this.httpBaseRequest.editResponseCall(url, manufacturer);
    return response;
  }
  public deleteManufacturer(manufacturer:manufacturerInterface){
    let url = this.httpChildeRequest.urlGenerator(this.url+"/"+manufacturer.id,);
    let response = this.httpBaseRequest.deleteResponseCall(url);
    return response;
  }
  public getAllManufacturer(parameters):Observable<manufacturerInterface>{
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
  public getDetailViaIDManufacturer(id:number):Observable<manufacturerInterface>{
    let url = this.httpChildeRequest.urlGenerator(this.url+"/"+id,);  
    return this.httpBaseRequest.getResponseCall(url);
  }
}
