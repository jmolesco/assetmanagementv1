import { Injectable, EventEmitter } from '@angular/core';
import { Subscription  } from 'rxjs';
import { authInterface } from '@sharedInterface/authInterface';
import { urlInterface } from '@sharedInterface/urlInterface';
@Injectable({
  providedIn: 'root'
})
export class ChildRequestService {

  constructor() { }

  currentPage:number =0;
  showAll:boolean = false;

  invokeFirstComponentFunction = new EventEmitter();    
  subsVar: Subscription;    

  invokeLoadNewPageComponentFunction = new EventEmitter();    
  subsVar1: Subscription;    

  sendNextPage(currentPage):void{
     this.invokeFirstComponentFunction.emit(currentPage);
  }

  loadNewPage(totalRecords):void{
    //console.log(totalRecords);
    this.invokeLoadNewPageComponentFunction.emit(totalRecords);
  }

  urlGenerator(urlService){
    let url:authInterface = { 
      api_url:urlService,             
    }
    return url;
  }
  urlGeneratorGetAll(data:urlInterface){
    let url:authInterface = { 
          api_url:data.url                      +
                  "?showAll="+data.showAll          +
                  "&currentPage="+data.currentPage  +
                  "&searchBy="+data.searchBy        +
                  "&Keyword="+data.keyword          +
                  "&orderby="+data.orderBy          +
                  "&ordertype="+data.orderType};
    return url;              
    //http://localhost:62236/api/categories?showAll=false&currentpage=1&searchBy=2&Keyword=test&orderby=2&ordertype=2
  }
}