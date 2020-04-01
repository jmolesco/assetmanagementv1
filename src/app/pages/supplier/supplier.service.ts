import { Injectable } from '@angular/core';
import { supplierInterface }  from './supplierInterface'
import { Observable } from 'rxjs';
import {environment} from '@environment/environment';
import  {BaseRequestService, ChildRequestService, constantKeywords} from '@shared/shared.module';
import {urlInterface} from '@sharedInterface/urlInterface';
@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  //VARIABLES DECLARATION
  url:string;
  supplierUrl:string=constantKeywords.supplier;

  constructor(private httpBaseRequest: BaseRequestService,
    private httpChildeRequest: ChildRequestService
    ) {    
    this.url = environment.url + this.supplierUrl;
  }


  public addSupplier(supplier:supplierInterface){
    let url = this.httpChildeRequest.urlGenerator(this.url);
    let response = this.httpBaseRequest.addResponseCall(url, supplier);
    return response;
  }

  public editSupplier(supplier:supplierInterface){
    let url = this.httpChildeRequest.urlGenerator(this.url+"/"+supplier.id,);
    let response = this.httpBaseRequest.editResponseCall(url, supplier);
    return response;
  }
  public deleteSupplier(supplier:supplierInterface){
    let url = this.httpChildeRequest.urlGenerator(this.url+"/"+supplier.id,);
    let response = this.httpBaseRequest.deleteResponseCall(url);
    return response;
  }
  public getAllSupplier(parameters):Observable<supplierInterface>{
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
  public getDetailViaIDSupplier(id:number):Observable<supplierInterface>{
    let url = this.httpChildeRequest.urlGenerator(this.url+"/"+id,);  
    return this.httpBaseRequest.getResponseCall(url);
  }
}
