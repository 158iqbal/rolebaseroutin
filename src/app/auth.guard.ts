import { Injectable, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  OnInit{

  constructor(private routes : Router){}

  ngOnInit(): void {
  }

  canActivate(
    roledata: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {
      if(localStorage.getItem('userrole')!= null){

        var storeroledata = localStorage.getItem('userrole')
       
      if( storeroledata == roledata.data.role){

    return true;
      }
      else
      {
        return false;
      }
    }
  }
  
}
