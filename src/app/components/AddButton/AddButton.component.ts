import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-AddButton',
  templateUrl: './AddButton.component.html',
  styleUrls: ['./AddButton.component.css']
})
export class AddButtonComponent implements OnInit {

  @Input('title') title:string = "titulo";
  @Input('urlLink') urlLink:string = "";

  constructor() { }

  ngOnInit() {
  }

}
