import { Component, OnInit } from '@angular/core';
import { ManufacturerService } from '@manufacturer/manufacturer.service';
import { manufacturerInterface }  from '@manufacturer/manufacturerInterface';
import { ActivatedRoute } from '@angular/router';
import  { constantKeywords} from '@shared/shared.module';

@Component({
  selector: 'app-manufacturer-detail',
  templateUrl: './manufacturer-detail.component.html',
  styleUrls: ['./manufacturer-detail.component.scss']
})
export class ManufacturerDetailComponent implements OnInit {

    //VARIABLE DECLARATION
    functionState:boolean = false;
    functionUsed:string="";//keywords.recordAdded;
    functionStatus:boolean = false;
    detailContent;
    name:string;
    id:number;
    actionType:string=constantKeywords.actionInsert;
    constructor(private httpService:ManufacturerService,
      private route:ActivatedRoute
      ) { 
        this.route.params.subscribe(params=>{
            const id = params['id'];
            if(id!=="new"){
               this.functionState = true;
               this.httpService.getDetailViaIDManufacturer(id).subscribe(data=>
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
      const data:manufacturerInterface = {
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
      this.httpService.addManufacturer(dataAdd).subscribe(
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
      this.httpService.editManufacturer(dataEdit).subscribe(
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
  