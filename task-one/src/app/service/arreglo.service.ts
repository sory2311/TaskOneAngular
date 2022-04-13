import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ArregloService {

  data = [
    {
      name: 'Sorangel',
      lastname: 'Mejía',
      email:'mejiasory96@gmail.com'

    },
    {

      name: 'Nanny',
      lastname: 'Niño',
      email: 'nanny.nino23@gmail.com'

    },
    {
      name : 'Bruce',
      lastname: 'Wayne',
      email: 'batman21@gmail.com'
    }

  ]

  constructor() { }

  getDataArreglo(){
    return this.data;
  }
}


