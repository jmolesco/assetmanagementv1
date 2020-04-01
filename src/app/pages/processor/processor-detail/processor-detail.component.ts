import { Component, OnInit } from '@angular/core';
import { ProcessorService } from '@processor/processor.service';
import { processorInterface }  from '@processor/processorInterface';
import { ActivatedRoute } from '@angular/router';
import  { constantKeywords} from '@shared/shared.module';

@Component({
  selector: 'app-processor-detail',
  templateUrl: './processor-detail.component.html',
  styleUrls: ['./processor-detail.component.scss']
})
export class ProcessorDetailComponent implements OnInit {

  //VARIABLE DECLARATION
  functionState:boolean = false;
  functionUsed:string="";//constantKeywords.recordAdded;
  functionStatus:boolean = false;
  detailContent;
  name:string;
  id:number;
  actionType:string=constantKeywords.actionInsert;
  constructor(private httpService:ProcessorService,
    private route:ActivatedRoute
    ) { 
      this.route.params.subscribe(params=>{
          const id = params['id'];
          if(id!=="new"){
             this.functionState = true;
             this.httpService.getDetailViaIDProcessor(id).subscribe(data=>
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
    const data:processorInterface = {
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
    this.httpService.addProcessor(dataAdd).subscribe(
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
    this.httpService.editProcessor(dataEdit).subscribe(
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
