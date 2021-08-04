import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Reto } from 'src/models/Reto';

@Component({
  selector: 'app-SlideRetos',
  templateUrl: './SlideRetos.component.html'
})
export class SlideRetosComponent implements OnInit, AfterViewInit{


  @Input('retos') retos:Reto[];

  // Arreglo de arreglos de retos
  public viewRetos:Reto[][] = [];

  constructor() { }

  ngOnInit() {
      this.viewRetos = this.LitsOfrates();
  }

  ngAfterViewInit(){
     if(this.retos.length != 0){
        document.getElementsByClassName('carousel-item')[0].classList.add('active');
     }
  }

  // Transformar lista de retos a lista de listas
  /*
      Cada nueva lista contiene aproximadamente 4 retos
      para poder ser agregado a el slider
  */
  private LitsOfrates(){

      let Data:Reto[][] = []; // Arreglo de arreglos
      Data.push([]);

      let count = 0;

      for(let i in this.retos){

          Data[Data.length-1].push(this.retos[i]);
          count++;

          // Si el tamaño del arreglo es divisile entre 4 ha comletado una lista, y es agregada otra
          if(count == 4){
              Data.push([]);
              count = 0;
          }

      }

      Data.pop();
      return Data;
  }

}
