import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from '@environment/environment';
import  {BaseRequestService, ChildRequestService, constantKeywords} from '@shared/shared.module';
import {urlInterface} from '@sharedInterface/urlInterface';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {

    //VARIABLES DECLARATION
    url:string;
    categoryUrl:string=constantKeywords.dashboard;
    constructor(private httpBaseRequest: BaseRequestService,
      private httpChildeRequest: ChildRequestService
      ) {    
      this.url = environment.url + this.categoryUrl;
    }
    public getAllActivity(parameters, urlParam):Observable<any>{
      let urlInputs:urlInterface = {
        url:this.url + urlParam,
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

}
