import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() {
    this.getMembers();
   }

  ngOnInit() {
  }

 guid(){
    return Math.floor(Math.random() * 100)
}

   saveMemberInfo() {

    var keys = ['firstname','lastname','typeOfRole','emailid','pw','Confirmpw']
    var obj = {};

    keys.forEach(function (item,index){
        var result =(<HTMLInputElement>document.getElementById(item)).value;

        if (result) {
            obj[item] = result;

            
        }
    })

    var members = this.getMembers();

    if (Object.keys(obj).length) {

        var members = this.getMembers();
       
        members.push(obj);
        var data = JSON.stringify(members);

        localStorage.setItem("members",data)
        alert("Data Inserted")
        
        
        
    }

    
}

 getMembers(){
  var memberRecord = localStorage.getItem("members");
  var members = []
  if(!memberRecord){
      return members;
  }else{
      members = JSON.parse(memberRecord)

      return members;
  }

}


}
