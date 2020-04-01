import { Component, OnInit } from '@angular/core';
import { CategoryService } from '@category/category.service';
import { categoryInterface }  from '@category/categoryInterface';
import { ActivatedRoute } from '@angular/router';
import  { constantKeywords} from '@shared/shared.module';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss']
})
export class CategoryDetailComponent implements OnInit {

  //VARIABLE DECLARATION
  functionState:boolean = false;
  functionUsed:string="";//constantKeywords.recordAdded;
  functionStatus:boolean = false;
  detailContent;
  name:string;
  id:number;
  actionType:string=constantKeywords.actionInsert;
  constructor(private httpService:CategoryService,
    private route:ActivatedRoute
    ) { 
      this.route.params.subscribe(params=>{
          const id = params['id'];
          if(id!=="new"){
             this.functionState = true;
             this.httpService.getDetailViaIDCategory(id).subscribe(data=>
              {   
                 this.detailContent = data;
                 this.name = this.detailContent.name;
                 this.id = this.detailContent.id;
                 this.functionUsed =constantKeywords.recordEdited;
                 this.actionType = constantKeywords.actionEdit;
              } 
            );
          }
         
      });
  }


  ngOnInit(): void {
  }

  getInputData(){
    const data:categoryInterface = {
      id:this.id,
      name:this.name.trim()
    }
    return data;
  }
  clearInput(){
    this.id=0;
    this.name=" ";
  }
  functionDelay(time:number){
    setTimeout(()=>{  this.functionStatus = false; }, time );
  }
  submitInsertRecord(){
    const dataAdd = this.getInputData();
    this.httpService.addCategory(dataAdd).subscribe(
      success => { 
        this.clearInput();
        this.functionStatus = true;
        this.functionDelay(constantKeywords.delayTime);
      },
      error =>  { 
        console.log(error) 
        this.functionStatus = false;
      } 
    );
  }
  submitEditRecord():void{
    const dataEdit = this.getInputData();
    console.log(dataEdit);
    this.httpService.editCategory(dataEdit).subscribe(
      success => { 
        this.functionStatus = true;
        this.functionDelay(constantKeywords.delayTime);
      },
      error =>  { 
        console.log(error) 
        this.functionStatus = false;
      } 
    );
  }
}
