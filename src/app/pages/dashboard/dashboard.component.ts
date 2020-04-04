import { Component, OnInit } from '@angular/core';
import { DashboardService } from '@dashboard/dashboard.service';
import  {constantKeywords} from '@shared/shared.module';
//import * as CanvasJS from '../../../../node_modules/canvasjs/dist/canvasjs.min.js';
declare var CanvasJS:any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(private httpService:DashboardService,
    ) { 
   
   
    }

  //VARIABLES
  detailList;
  totalPageList:number=0;
  currentPage:number = 1;
  showAll:boolean = false;
  keyword:string;
  orderBy:number=0;
  orderType:number=0;
  searchBy:number=0;
  filterBy:number=0;
  category: number;
  manufacturer: number;
  supplier: number;
  model: number;
  processor: number;
  harddisk: number;
  memory: number;
  videocard: number;
  asset: number;
  user: number;
  chartRecord= new Array();
  ngOnInit(): void
  {
    this.recordListLoader(this.currentPage, this.showAll,this.searchBy, this.keyword, this.orderBy, this.orderType,constantKeywords.dashActivity);
    this.recordListLoader(this.currentPage, this.showAll,this.searchBy, this.keyword, this.orderBy, this.orderType,constantKeywords.dashTotalNum);
    this.recordListLoader(this.currentPage, this.showAll,this.searchBy, this.keyword, this.orderBy, this.orderType,constantKeywords.dashChart);
    
    
  }
  chartCreator(dataRecords){
    console.log(dataRecords);
    let chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Asset Management System Records"
      },
      data: [{
        type: "column",
        dataPoints: dataRecords
      }]
    });
    chart.render();
  }
  recordListLoader(currentPage, showAll, searchBy, keyword, orderBy, orderType, param):void{
    let dataParam = this.parameterGenerator(currentPage, showAll,searchBy, keyword, orderBy, orderType);
    this.httpService.getAllActivity(dataParam, param).subscribe(data=>
    {   
       

        if(param=== constantKeywords.dashActivity)
        { 
          this.detailList = data['list'];;
          this.totalPageList = data["totalPage"]
        }else if(param === constantKeywords.dashTotalNum){
          let result = data;
          this.category = result.category;
          this.manufacturer= result.manufacturer;
          this.supplier = result.supplier;
          this.model = result.model;
          this.processor = result.processor;
          this.harddisk = result.harddisk;
          this.memory =result.memory;
          this.videocard = result.videocard;
          this.asset= result.asset;
          this.user =result.user;
        }
        else{
          let records = new Array();
          for(let i=0;i<data.length;i++){
            Object.keys(data[i]).forEach(function(key) {
              //console.log(key, data[i][key]);
              records.push({
                y:data[i][key],
                label:key
              });
          });
          // Object.entries(data[i]).forEach(
          //   ([key, value]) => console.log(key, value)
          // );

          }
          this.chartCreator(records);
        }
    } 
    );
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
