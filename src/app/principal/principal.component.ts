import { Component, OnInit } from '@angular/core';
import {articulo} from '../models/articulo';
import {articulos} from '../models/articulos';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  materia="PAVII";
  parametro1="PAVII";
  validador=true;
  mensajeBoton="Agregar";
  imagen1='https://www.frc.utn.edu.ar/imagenes/logoutn.gif';
  color='red';
  listaArticulos: articulo[];
  constructor() { }

  

  ngOnInit() {
    this.listaArticulos = articulos;
  }
  metodoClick(){
    
    if(this.mensajeBoton=="ya se agrego"){
      window.alert("ya se agrego");
      return;
    }
    else
    {
      this.materia+="boton agregando";
    this.mensajeBoton="ya se agrego";
    }


  }

}