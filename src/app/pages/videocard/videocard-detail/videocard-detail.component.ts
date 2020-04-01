import { Component, OnInit } from '@angular/core';
import { videocardInterface }  from '@videocard/videocardInterface'
import { VideocardService } from '@videocard/videocard.service';
import { ActivatedRoute } from '@angular/router';
import  { constantKeywords} from '@shared/shared.module';
@Component({
  selector: 'app-videocard-detail',
  templateUrl: './videocard-detail.component.html',
  styleUrls: ['./videocard-detail.component.scss']
})
export class VideocardDetailComponent implements OnInit {

  //VARIABLE DECLARATION
  functionState:boolean = false;
  functionUsed:string="";//constantKeywords.recordAdded;
  functionStatus:boolean = false;
  detailContent;
  size:number;
  id:number;
  actionType:string=constantKeywords.actionInsert;
  constructor(private httpService:VideocardService,
    private route:ActivatedRoute
    ) { 
      this.route.params.subscribe(params=>{
          const id = params['id'];
          if(id!=="new"){
             this.functionState = true;
             this.httpService.getDetailViaIDVideoCard(id).subscribe(data=>
              {   
                 this.detailContent = data;
                 this.size = this.detailContent.size;
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
    const data:videocardInterface = {
      id:this.id,
      size:this.size
    }
    return data;
  }
  clearInput(){
    this.id=0;
    this.size=0;
  }
  functionDelay(time:number){
    setTimeout(()=>{  this.functionStatus = false; }, time );
  }
  submitInsertRecord(){
    const dataAdd = this.getInputData();
    this.httpService.addVideoCard(dataAdd).subscribe(
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
    this.httpService.editVideoCard(dataEdit).subscribe(
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
