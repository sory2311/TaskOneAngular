import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArregloService {

  data = 'Arreglo';

  listaArreglo = 
  [
    {
      nombre : 'Sorangel',
    },
    {
      apellido: 'Mejía',
    },
    {
      correo : 'mejiasory96@gmail.com'
    }

  ]

  constructor() { }

  getDataArreglo(){
    return this.data;
  }
}


