import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-audituser',
  templateUrl: './audituser.component.html',
  styleUrls: ['./audituser.component.css']
})
export class AudituserComponent implements OnInit {
  ord:boolean=true
  colname:string="eid"
  currentdate=new Date();
  constructor() {

    this.getAudituserData()
   }

  ngOnInit() {
  }

  funorder(cname){
    this.ord=!this.ord
    this.colname=cname
  }
  auditData: any = [];
  getAudituserData(){
    var data = JSON.parse(localStorage.getItem('members'));
    

    this.auditData = [];
  
  for(var i=0; i<data.length; i++){
     var ab = data[i]
       
       this.auditData.push(ab);
     }
    console.log("this.auditData"+this.auditData)
    
  }

  
}
