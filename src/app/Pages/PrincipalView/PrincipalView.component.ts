import { Component, OnInit } from '@angular/core';
import { DisplaySidebarService } from 'src/app/services/displaySidebar/displaySidebar.service';

@Component({
  selector: 'app-PrincipalView',
  templateUrl: './PrincipalView.component.html',
  styleUrls: ['./PrincipalView.component.css']
})
export class PrincipalViewComponent implements OnInit {

  constructor(public displaySidebar:DisplaySidebarService) { }

  ngOnInit() {
  }

}
