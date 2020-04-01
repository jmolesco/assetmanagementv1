import { Injectable } from '@angular/core';
import { categoryInterface }  from './categoryInterface'
import { Observable } from 'rxjs';
import {environment} from '@environment/environment';
import  {BaseRequestService, ChildRequestService, constantKeywords} from '@shared/shared.module';
import {urlInterface} from '@sharedInterface/urlInterface';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  //VARIABLES DECLARATION
  url:string;
  categoryUrl:string=constantKeywords.category;

  constructor(private httpBaseRequest: BaseRequestService,
    private httpChildeRequest: ChildRequestService
    ) {    
    this.url = environment.url + this.categoryUrl;
  }


  public addCategory(category:categoryInterface){
    let url = this.httpChildeRequest.urlGenerator(this.url);
    let response = this.httpBaseRequest.addResponseCall(url, category);
    return response;
  }

  public editCategory(category:categoryInterface){
    let url = this.httpChildeRequest.urlGenerator(this.url+"/"+category.id,);
    let response = this.httpBaseRequest.editResponseCall(url, category);
    return response;
  }
  public deleteCategory(category:categoryInterface){
    let url = this.httpChildeRequest.urlGenerator(this.url+"/"+category.id,);
    let response = this.httpBaseRequest.deleteResponseCall(url);
    return response;
  }
  public getAllCategory(parameters):Observable<categoryInterface>{
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
  public getDetailViaIDCategory(id:number):Observable<categoryInterface>{
    let url = this.httpChildeRequest.urlGenerator(this.url+"/"+id,);  
    return this.httpBaseRequest.getResponseCall(url);
  }
}
