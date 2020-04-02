import { Component, OnInit } from '@angular/core';
import { UserService } from '@user/user.service';
import { userInterface }  from '@user/userInterface';
import { ActivatedRoute } from '@angular/router';
import  { constantKeywords} from '@shared/shared.module';
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  //VARIABLE DECLARATION
  functionState:boolean = false;
  functionUsed:string="";//constantKeywords.recordAdded;
  functionStatus:boolean = false;
  detailContent;
  
  fullName:string;
  id:number;
  userName:string;
  passwordHash:string;
  passwordSalt:string;
  password:string;
  
  actionType:string=constantKeywords.actionInsert;
  constructor(private httpService:UserService,
    private route:ActivatedRoute
    ) { 
      this.route.params.subscribe(params=>{
          const id = params['id'];
          if(id!=="new"){
             this.functionState = true;
             this.httpService.getDetailViaIDUser(id).subscribe(data=>
              {   
                 this.detailContent = data;
                 this.fullName = this.detailContent.fullName;
                 this.userName = this.detailContent.userName;
                 this.id = this.detailContent.id;
                 this.password= this.detailContent.passwordHash;
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
    const data:userInterface = {
      id:this.id,
      fullName:this.fullName,
      userName:this.userName,
      password:this.password,
      passwordHash:this.passwordHash,
      passwordSalt:this.passwordSalt
    }
    return data;
  }
  clearInput(){
    this.id=0;
    this.fullName =  " ",
    this.userName=  " ",
    this.passwordHash=  " ",
    this.passwordSalt=  " "
  }
  functionDelay(time:number){
    setTimeout(()=>{  this.functionStatus = false; }, time );
  }
  submitInsertRecord(){
    const dataAdd = this.getInputData();
    this.httpService.addUser(dataAdd).subscribe(
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
    this.httpService.editUser(dataEdit).subscribe(
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
