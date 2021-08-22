import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-PreviewIdea',
  templateUrl: './PreviewIdea.component.html',
  styleUrls: ['./PreviewIdea.component.css']
})
export class PreviewIdeaComponent implements OnInit {

  // Props del componente
  @Input('descripcion') descripcion:string = "descripcion del reto";
  @Input('evaluador') evaluador:string = "nombre de evaluador";
  @Input('estado') estado:string = "estado de la idea";
  @Input('fechalimite') fechalimite:Date;
  @Input('ideador') ideador:string = "ideador";
    
  constructor() { }

  ngOnInit() {
  }

}
