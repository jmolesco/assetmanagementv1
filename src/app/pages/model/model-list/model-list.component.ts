import { Component, OnInit } from '@angular/core';
import { ModelService } from '@model/model.service';
import { ChildRequestService } from '@shared/shared.module';
import { modelInterface }  from '@model/modelInterface'
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-model-list',
  templateUrl: './model-list.component.html',
  styleUrls: ['./model-list.component.scss']
})
export class ModelListComponent implements OnInit {

  clickEventsubscription:Subscription;

  constructor(private httpService:ModelService,
    private httpChildService:ChildRequestService
    ) { 
      if(this.httpChildService.subsVar!==undefined){
        this.httpChildService.subsVar = undefined;     
      }
  }

  //VARIABLES
  modelList;
  totalPageList:number=0;
  currentPage:number = 1;
  showAll:boolean = false;
  keyword:string;
  orderBy:number=0;
  orderType:number=0;
  searchBy:number=0;
  

  ngOnInit(): void {
    //this.recordListLoader(this.currentPage, this.showAll);
    this.recordListLoader(this.currentPage, this.showAll,this.searchBy, this.keyword, this.orderBy, this.orderType);
    if (this.httpChildService.subsVar==undefined) 
    {    
      this.httpChildService.subsVar = this.httpChildService.invokeFirstComponentFunction.subscribe((currentPage:number) => { 
        this.currentPage = currentPage;
        this.recordListLoader(currentPage, this.showAll, this.searchBy=1, this.keyword, this.orderBy, this.orderType)
      });    
    }
  }
  recordListLoader(currentPage, showAll, searchBy, keyword, orderBy, orderType):void{
    let dataParam = this.parameterGenerator(currentPage, showAll,searchBy, keyword, orderBy, orderType);
    this.httpService.getAllModel(dataParam).subscribe(data=>
      {   
         this.modelList = data['list'];
         this.totalPageList = data["totalPage"]
      } 
    );
  }
  
  submitDeleteRecord(id:number):void{
    const dataDelete:modelInterface = {
      id:id,
      name:""
    }
    this.httpService.deleteModel(dataDelete).subscribe(
      success => { 
        alert('Done');
        this.recordListLoader(this.currentPage, this.showAll, this.searchBy=1, this.keyword, this.orderBy, this.orderType)
      },
      error =>  { 
        console.log(error) 
      } 
    );
  }

  submitSearch():void{
    let dataParam = this.parameterGenerator(this.currentPage=1, this.showAll,1, this.keyword, this.orderBy, this.orderType);
    this.httpService.getAllModel(dataParam).subscribe(data=>
      {   
         this.modelList = data['list'];
         this.totalPageList = data["totalPage"]
         this.httpChildService.loadNewPage(this.totalPageList);
      } 
    );
  }

  parameterGenerator(currentPage, showAll, searchBy?,keyword?, orderBy?, orderType?){
    let parameters = {
      currentPage:currentPage,
      showAll:showAll,
      searchBy:searchBy===undefined || searchBy === 0?"":searchBy,
      keyword:keyword===undefined?"":keyword,
      orderBy:orderBy===undefined || orderBy === 0?"":orderBy,
      orderType:orderType===undefined || orderType === 0?"":orderType
    }
    return parameters
  }
}