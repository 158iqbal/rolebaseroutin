import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  tmp:boolean=true

  constructor(private ser : MyserviceService, private routes: Router) { }

  ngOnInit() {
  }



funlogin(){
  
       var storgaedata = JSON.parse(localStorage.getItem('members'));


var email = (<HTMLInputElement>document.getElementById("loginemail")).value;


     
 var dataone
 dataone = storgaedata.find(function(item, index){
    
     return item.emailid == email
 })

 

var passid = (<HTMLInputElement>document.getElementById("loginpass")).value;


var datatwo
 datatwo = storgaedata.find(function(item, index){
   
     return item.pw == passid
 })



 var roleid = (<HTMLInputElement>document.getElementById("loginrole")).value;


 var datathree
 datathree = storgaedata.find(function(item, index){
    
     return item.typeOfRole == roleid
 })





if(dataone.emailid==email){

  if(datatwo.pw==passid){
    if(datathree.typeOfRole == roleid){

      alert('Login Successfully')

 var setRole = roleid
 localStorage.setItem('userrole',setRole);
 this.ser.tmp=false

 this.routes.navigate(['./audituser'])


    }
  }
  


}
  else if(email==undefined ||passid==undefined ||roleid==undefined){
  
   alert('fill the  field')
  

 }
 else{
   alert('!Login Fail')
 }
 




}



  

}
