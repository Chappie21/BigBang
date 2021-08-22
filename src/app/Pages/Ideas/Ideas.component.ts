import { Component, Input, OnInit } from '@angular/core';
import { OptionSelectService } from 'src/app/services/OptionSelect.service';

@Component({
  selector: 'app-Ideas',
  templateUrl: './Ideas.component.html',
  styleUrls: ['./Ideas.component.css']
})
export class IdeasComponent implements OnInit {

  constructor(option:OptionSelectService) { 
     
    
  }

  ngOnInit() {

  }

}
