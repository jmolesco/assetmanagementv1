import { Injectable } from '@angular/core';
import { assetInterface }  from './assetInterface'
import { Observable } from 'rxjs';
import {environment} from '@environment/environment';
import  {BaseRequestService, ChildRequestService, constantKeywords} from '@shared/shared.module';
import {urlInterface} from '@sharedInterface/urlInterface';
@Injectable({
  providedIn: 'root'
})
export class AssetService {

  //VARIABLES DECLARATION
  url:string;
  assetUrl:string=constantKeywords.asset;

  constructor(private httpBaseRequest: BaseRequestService,
    private httpChildeRequest: ChildRequestService
    ) {    
    this.url = environment.url + this.assetUrl;
  }


  public addAsset(asset:assetInterface){
    let url = this.httpChildeRequest.urlGenerator(this.url);
    let response = this.httpBaseRequest.addResponseCall(url, asset);
    return response;
  }

  public editAsset(asset:assetInterface){
    let url = this.httpChildeRequest.urlGenerator(this.url+"/"+asset.id,);
    let response = this.httpBaseRequest.editResponseCall(url, asset);
    return response;
  }
  public deleteAsset(id){
    let url = this.httpChildeRequest.urlGenerator(this.url+"/"+id,);
    let response = this.httpBaseRequest.deleteResponseCall(url);
    return response;
  }
  public getAllAsset(parameters):Observable<assetInterface>{
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
    console.log(url);
    return this.httpBaseRequest.getResponseCall(url);
  }
  public getDetailViaIDAsset(id:number):Observable<assetInterface>{
    let url = this.httpChildeRequest.urlGenerator(this.url+"/"+id,);  
    return this.httpBaseRequest.getResponseCall(url);
  }
}
