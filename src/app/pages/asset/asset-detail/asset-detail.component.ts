import { Component, OnInit } from '@angular/core';
import { AssetService } from '@asset/asset.service';
import { assetInterface }  from '@asset/assetInterface';
import { ActivatedRoute } from '@angular/router';
import { constantKeywords} from '@shared/shared.module';
import {CategoryService} from '@category/category.service';
import {HarddiskService} from '@harddisk/harddisk.service';
import {ManufacturerService} from '@manufacturer/manufacturer.service';
import {MemoryService}  from '@memory/memory.service';
import {ModelService} from '@model/model.service';
import {ProcessorService} from '@processor/processor.service';
import {SupplierService} from '@supplier/supplier.service';
import {VideocardService} from '@videocard/videocard.service';
import {convertStringToDate} from '@sharedHelper/helperFunctions';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-asset-detail',
  templateUrl: './asset-detail.component.html',
  styleUrls: ['./asset-detail.component.scss']
})
export class AssetDetailComponent implements OnInit {

  //VARIABLE DECLARATION
  functionState:boolean = false;
  functionUsed:string="";//constantKeywords.recordAdded;
  functionStatus:boolean = false;
  detailContent;
  id:number;
  supplierId:number=0;
  modelId:number;
  processorId:number;
  memoryId:number;
  videocardId:number;
  harddiskId:number;
  manufacturerId:number;
  categoryId:number;
  serialNo:string;
  assetTag:string;
  battery:string;
  adapter:string;
  name:string;
  assignedTo:string;
  deliveryDate:string;
  poNo:string;
  drNo:string;
  siNo:string;
  macAddress:string;
  ipAddress:string;
  status:number;
  purchaseDate:string;
  purchaseCost:number;
  warranty:string;
  notes:string;
  size:number;
  deliveryDate1:string;


  supplierList;
  modelList;
  categoryList;
  manufacturerList;
  processorList;
  harddiskList;
  memoryList;
  videocardList;
  statusList = new Array();
  
  totalPageList:number=0;
  
  //PAGE
  currentPage:number = 1;
  showAll:boolean = true;
  keyword:string;
  orderBy:number=0;
  orderType:number=0;
  searchBy:number=0;
  filterBy:number=0;

  actionType:string=constantKeywords.actionInsert;
  constructor(
    private httpService:AssetService,
    private route:ActivatedRoute,
    private httpCategory:CategoryService,
    private httpHardDisk:HarddiskService,
    private httpManufacturer:ManufacturerService,
    private httpMemory:MemoryService,
    private httpModel:ModelService,
    private httpProcessor:ProcessorService,
    private httpSupplier:SupplierService,
    private httpVideoCard:VideocardService,
    ) { 
      this.route.params.subscribe(params=>{
          const id = params['id'];
          if(id!=="new"){
             this.functionState = true;
             this.httpService.getDetailViaIDAsset(id).subscribe(data=>
              {   
                 this.detailContent = data;
                 this.actionType =constantKeywords.actionEdit;
                 this.id = this.detailContent.id;
                 this.supplierId=this.detailContent.supplierId;
                 this.modelId=this.detailContent.modelId;
                 this.processorId=this.detailContent.processorId;
                 this.memoryId=this.detailContent.memoryId;
                 this.videocardId=this.detailContent.videoCardId;
                 this.harddiskId=this.detailContent.hardDiskId;
                 this.manufacturerId=this.detailContent.manufacturerId;
                 this.categoryId=this.detailContent.categoryId;
                 this.serialNo=this.detailContent.serialNo;
                 this.assetTag=this.detailContent.assetTag;
                 this.battery=this.detailContent.battery;
                 this.adapter=this.detailContent.adapter;
                 this.name=this.detailContent.name;
                 this.assignedTo=this.detailContent.assignedTo;
                 this.deliveryDate= new Date(convertStringToDate(this.detailContent.deliveryDate)).toISOString().split('T')[0];
                 this.poNo=this.detailContent.poNo;
                 this.drNo=this.detailContent.drNo;
                 this.siNo=this.detailContent.siNo;
                 this.macAddress=this.detailContent.macAddress;
                 this.ipAddress=this.detailContent.ipAddress;
                 this.status=this.detailContent.status;
                 this.purchaseDate= new Date(convertStringToDate(this.detailContent.purchaseDate)).toISOString().split('T')[0];
                 this.purchaseCost=this.detailContent.purchaseCost;
                 this.warranty=this.detailContent.warranty;
                 this.notes=this.detailContent.notes
                 this.functionUsed =constantKeywords.recordEdited;
                 this.actionType = constantKeywords.actionEdit;
              } 
            );
          }
         
      });
  }


  ngOnInit(): void {
    this.loadList();
  }

  getInputData(){
    const data:assetInterface = {
      id:this.id,
      supplierId:this.supplierId,
      modelId:this.modelId,
      processorId:this.processorId,
      memoryId:this.memoryId,
      videocardId:this.videocardId,
      harddiskId:this.harddiskId,
      manufacturerId:this.manufacturerId,
      categoryId:this.categoryId,
      serialNo:this.serialNo,
      assetTag:this.assetTag,
      battery:this.battery,
      adapter:this.adapter,
      name:this.name,
      assignedTo:this.assignedTo,
      deliveryDate:new Date(this.deliveryDate),
      poNo:this.poNo,
      drNo:this.drNo,
      siNo:this.siNo,
      macAddress:this.macAddress,
      ipAddress:this.ipAddress,
      status:this.status,
      purchaseDate:new Date(this.purchaseDate),
      purchaseCost:this.purchaseCost,
      warranty:this.warranty,
      notes:this.notes
    }
    return data;
  }
  clearInput(){
    this.id=0;
  }
  functionDelay(time:number){
    setTimeout(()=>{  this.functionStatus = false; }, time );
  }
  submitInsertRecord(){
    const dataAdd = this.getInputData();
    this.httpService.addAsset(dataAdd).subscribe(
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
    this.httpService.editAsset(dataEdit).subscribe(
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
  loadList(){
    let dataParam = this.parameterGenerator(this.currentPage, this.showAll,this.searchBy, this.keyword, this.orderBy, this.orderType, this.filterBy);
    this.httpSupplier.getAllSupplier(dataParam).subscribe(data=>
      {   
         this.supplierList = data['list'];        
    } 
    );

    this.httpModel.getAllModel(dataParam).subscribe(data=>
      {   
         this.modelList = data['list'];
      } 
    );

    this.httpCategory.getAllCategory(dataParam).subscribe(data=>
      {   
         this.categoryList = data['list'];        
    } 
    );

    this.httpProcessor.getAllProcessor(dataParam).subscribe(data=>
      {   
         this.processorList = data['list'];
      } 
    );

    this.httpHardDisk.getAllHardDisk(dataParam).subscribe(data=>
      {   
         this.harddiskList = data['list'];
      } 
    );

    this.httpMemory.getAllMemory(dataParam).subscribe(data=>
      {   
         this.memoryList = data['list'];
      } 
    );
    this.httpVideoCard.getAllVideoCard(dataParam).subscribe(data=>
      {   
         this.videocardList = data['list'];
      } 
    );
    this.httpManufacturer.getAllManufacturer(dataParam).subscribe(data=>
      {   
         this.manufacturerList = data['list'];
      } 
    );
    for(let i =0; i < constantKeywords.StatusArray.length; i++){
      this.statusList.push(constantKeywords.StatusArray[i]);
    }

  }
  parameterGenerator(currentPage, showAll, searchBy?,keyword?, orderBy?, orderType?, filterBy?){
    let parameters = {
      currentPage:currentPage,
      showAll:showAll,
      searchBy:searchBy===undefined || searchBy === 0?"":searchBy,
      keyword:keyword===undefined?"":keyword,
      orderBy:orderBy===undefined || orderBy === 0?"":orderBy,
      orderType:orderType===undefined || orderType === 0?"":orderType,
      filterBy:filterBy===undefined || filterBy === 0?"":filterBy,
    }
    return parameters
  }
}
