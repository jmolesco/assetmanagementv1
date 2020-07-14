import { Component, OnInit, Input } from '@angular/core';
import  { ChildRequestService} from '@sharedService/child-request.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

 //VARIABLES DECLARATION

 clickEventNewLoadPageSubscription:Subscription;

 list = new Array();
 pageList = new Array();
 pageListWordings = new Array();
 currentPage:number = 0;
 numberPerPage:number = 0;
 numberOfPage:number =0;
 previousState:boolean = false;
 nextState:boolean = false;
 
 isCurrent:string;
 classState:string;
 currentKey:string = "current_key_";
 comparerKey:string = "current_key_";
 constructor(private httpChildService:ChildRequestService) { 
   this.currentPage = 1;
   this.numberPerPage= 10;
   this.numberOfPage =0; 

   if(this.httpChildService.subsVar1!==undefined){
    this.httpChildService.subsVar1 = undefined;     
  }
 }

   
 @Input()
 paginationTotal:string

 createlist(totalItems):void{
   if(this.list.length >  0 ){
     this.list.splice(0, this.list.length);
   }
   for(var  i=1; i <= totalItems;i++){
     this.list.push(i);
     let currentKey = this.currentKey+i;
     this.pageListWordings.push(currentKey); 
   }
 }

 generateNumberofPage():number{
   if(this.list.length < this.numberPerPage){
    return this.list.length;  
   }
   return Math.ceil(this.list.length / this.numberPerPage);
 }

 nextPage():void{
   this.currentPage += 1;
   this.loadList();
 }

 previousPage():void{
   this.currentPage -= 1;
   this.loadList();
 }
 
 loadList():void{
   let begin = ((this.currentPage - 1) * this.numberPerPage);
   let end = begin + this.numberPerPage;
   //console.log("Begin : " + begin + " End : " + end );
  //  if(this.list.length < this.numberPerPage)
  //  {
  //    this.list.splice(end+1, end)
  //  }
    this.pageList  = this.list.slice(begin, end);
   this.check();
 }
 check():void{

   this.previousState = this.currentPage === 1?true:false;
   this.nextState = this.currentPage === this.numberOfPage?true:false;   
   
}


  //Next Page
  submitRequestPage(id):void{
    this.httpChildService.sendNextPage(id);
  }

 ngOnInit(): void {
  this.createlist(parseInt(this.paginationTotal));
  this.numberOfPage = this.generateNumberofPage();
  this.loadList();
   if(this.httpChildService.subsVar1===undefined){
         this.httpChildService.subsVar1 = this.httpChildService.invokeLoadNewPageComponentFunction.subscribe((totalPage:string) => { 
          // console.log("inside pagination : " + totalPage);
          this.createlist(parseInt(totalPage));
          this.numberOfPage = this.generateNumberofPage();
          console.log(this.numberOfPage);
          this.loadList();
    });  
   }
   else{
    this.createlist(parseInt(this.paginationTotal));
    this.numberOfPage = this.generateNumberofPage();
    this.loadList();
   }

 }


}