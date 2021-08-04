import { Component, OnInit } from '@angular/core';
import { Reto } from 'src/models/Reto';

@Component({
  selector: 'app-InitialView',
  templateUrl: './InitialView.component.html',
  styleUrls: ['./InitialView.component.css']
})
export class InitialViewComponent implements OnInit {

  public retos:Reto[] = [
    <Reto>{
        id: 1,
        titulo: "Reto1",
        descripcion: "esta es una descripcion de reto",
        categoria: "reto",
        ideaSol: "puede que funcione",
        whyeIdea: "¿por que no?",
        paintIdea: "../../../assets/img/bee.png"
    },
    <Reto>{
      id: 2,
      titulo: "Reto2",
      descripcion: "esta es una descripcion de reto",
      categoria: "reto",
      ideaSol: "puede que funcione",
      whyeIdea: "¿por que no?",
      paintIdea: "../../../assets/img/bee.png"
    },
    <Reto>{
      id: 3,
      titulo: "Reto3",
      descripcion: "esta es una descripcion de reto",
      categoria: "reto",
      ideaSol: "puede que funcione",
      whyeIdea: "¿por que no?",
      paintIdea: "../../../assets/img/bee.png"
    },
    <Reto>{
      id: 4,
      titulo: "Reto4",
      descripcion: "esta es una descripcion de reto",
      categoria: "reto",
      ideaSol: "puede que funcione",
      whyeIdea: "¿por que no?",
      paintIdea: "../../../assets/img/bee.png"
    },
    <Reto>{
      id: 5,
      titulo: "Reto5",
      descripcion: "esta es una descripcion de reto",
      categoria: "reto",
      ideaSol: "puede que funcione",
      whyeIdea: "¿por que no?",
      paintIdea: "../../../assets/img/bee.png"
    },
    <Reto>{
      id: 6,
      titulo: "Reto6",
      descripcion: "esta es una descripcion de reto",
      categoria: "reto",
      ideaSol: "puede que funcione",
      whyeIdea: "¿por que no?",
      paintIdea: "../../../assets/img/bee.png"
    },
    <Reto>{
      id: 7,
      titulo: "Reto7",
      descripcion: "esta es una descripcion de reto",
      categoria: "reto",
      ideaSol: "puede que funcione",
      whyeIdea: "¿por que no?",
      paintIdea: "../../../assets/img/bee.png"
    },
    <Reto>{
      id: 8,
      titulo: "Reto8",
      descripcion: "esta es una descripcion de reto",
      categoria: "reto",
      ideaSol: "puede que funcione",
      whyeIdea: "¿por que no?",
      paintIdea: "../../../assets/img/bee.png"
    }
]

  constructor() { }

  ngOnInit() {
  }

}
