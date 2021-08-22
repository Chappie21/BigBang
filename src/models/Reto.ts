// Modelo de datos de retos
/* 
    * Se define la plantilla de un objeto del tipo reto el cual contiene
    * la informacion completa de este
*/
export interface Reto{
    id: number,
    titulo:string,
    descripcion:string,
    categoria:string,
    ideaSol:string,
    whyeIdea:string,
    paintIdea:string,
    date:Date
}