import { Component, OnInit } from '@angular/core';
import { ArregloService } from 'src/app/service/arreglo.service';

@Component({
  selector: 'app-componente-b',
  templateUrl: './componente-b.component.html',
  styleUrls: ['./componente-b.component.css']
})
export class ComponenteBComponent implements OnInit {

  arreglo = '';
  
  constructor(private service: ArregloService) { }

  ngOnInit(): void {
    this.arreglo = this.service.getDataArreglo();
    console.log("component-b Component", this.arreglo)
  }

}
