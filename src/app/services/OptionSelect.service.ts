import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OptionSelectService {

  // Datos de opciones seleccionados o no seleccionados
  /* Inicialmente ninguno  es seleccionado */
  public options = { }

  constructor() { }

  // Crear una opcion por cada carOption generada
  public createOption(nameOption:string){
      nameOption = nameOption.replace(' ', '_');
      this.options[nameOption] = false;
  }

  // Marcar como seleccionado por medio del nombre de la opcion
  public setSelect(nameOption:string){
      nameOption = nameOption.replace(' ', '_');
      console.log(this.options[nameOption]);
      this.options[nameOption] = !this.options[nameOption];
  }

}
