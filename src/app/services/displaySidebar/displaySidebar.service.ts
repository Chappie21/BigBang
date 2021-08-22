import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisplaySidebarService {

  public displayforScreen:boolean = false;
  public displayforTouch:boolean = false;

  constructor() { }
  
}
