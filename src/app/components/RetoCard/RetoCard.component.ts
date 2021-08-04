import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-RetoCard',
  templateUrl: './RetoCard.component.html'
})
export class RetoCardComponent implements OnInit {

  @Input('title') title:string = "Titulo";
  @Input('descripcion') descipcion:string = "Lorem ipsum dolor sit amet, consectetuer adi";
  @Input('Img') img:string = "../../../assets/img/bee.png"

  constructor() { }

  ngOnInit() {
  }

}
