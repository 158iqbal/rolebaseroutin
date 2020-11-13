import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task';

  constructor(private ser: MyserviceService, private routes: Router){

  }

  funlogout(){
    localStorage.removeItem('userrole')
    this.ser.tmp=true
    this.routes.navigate(['./login'])

  }
}
