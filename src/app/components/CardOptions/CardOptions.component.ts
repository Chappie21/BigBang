import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-CardOptions',
  templateUrl: './CardOptions.component.html',
  styleUrls: ['./CardOptions.component.css']
})
export class CardOptionsComponent implements OnInit {

  @Input('nameOption') nameOption:string = "Opcion";
  @Input('logo') logo:string = "logo";
  @Input('urlOpcion') urlOpcion:string = "";
  @Input('urlLink') urlLink:string = "";

  // Colores del componente
  cardColor:string = "card rounded-0";
  headerColor:string = "card-header bg-white";
  buttonColor:string = "border rounded mt-4 text-center";
  arrow:string = "";
  imgColor:string = "";

  public paint(){
      this.headerColor = "card-header bg-primary"
      this.cardColor = "card rounded-0 border-primary";
      this.buttonColor = "bg-primary rounded mt-4 text-center text-white";
      this.imgColor = "blue";
      this.arrow = "arrow-down";
  }

  public dpaint(){
      this.headerColor = "card-header bg-white";
      this.cardColor= "card rounded-0";
      this.buttonColor = "border rounded mt-4 text-center";
      this.imgColor = "";
      this.arrow = "";
  }

  constructor() { }

  ngOnInit() {
  }

}
