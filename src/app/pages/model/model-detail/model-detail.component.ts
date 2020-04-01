import { Component, OnInit } from '@angular/core';
import { ModelService } from '@model/model.service';
import { modelInterface }  from '@model/modelInterface';
import { ActivatedRoute } from '@angular/router';
import  { constantKeywords} from '@shared/shared.module';
@Component({
  selector: 'app-model-detail',
  templateUrl: './model-detail.component.html',
  styleUrls: ['./model-detail.component.scss']
})
export class ModelDetailComponent implements OnInit {

 //VARIABLE DECLARATION
 functionState:boolean = false;
 functionUsed:string="";//keywords.recordAdded;
 functionStatus:boolean = false;
 detailContent;
  name:string;
  id:number;
  actionType:string=constantKeywords.actionInsert;
  constructor(private httpService:ModelService,
    private route:ActivatedRoute
    ) { 
      this.route.params.subscribe(params=>{
          const id = params['id'];
          if(id!=="new"){
             this.functionState = true;
             this.httpService.getDetailViaIDModel(id).subscribe(data=>
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
    const data:modelInterface = {
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
    this.httpService.addModel(dataAdd).subscribe(
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
    this.httpService.editModel(dataEdit).subscribe(
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
