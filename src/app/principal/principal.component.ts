import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  materia="PAVII";
  validador=true;
  mensajeBoton="Agregar";
  imagen1='https://www.frc.utn.edu.ar/imagenes/logoutn.gif';
  color='red';
  constructor() { }
  

  ngOnInit() {
  }
  metodoClick(){
    this.materia+="boton agregando";
    this.mensajeBoton="ya se agrego";


  }

}