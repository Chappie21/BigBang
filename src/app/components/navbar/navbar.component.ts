import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  @Input('username') username:string = "";
  @Input('usertype') usertype:string = "";
  @Input('navtype') navtype:number = 0;

  public colorNavbar:string = "navbar navbar-expand-lg navbar-light bg-light p-0";

  constructor() { }

  ngOnInit() {

      if(this.navtype == 1){
          this.colorNavbar = "navbar navbar-expand-lg navbar-light bg-light p-0";
      }

      if(this.navtype == 2){
          this.colorNavbar = "navbar navbar-expand-lg navbar-light p-0"
      }

  }

}
