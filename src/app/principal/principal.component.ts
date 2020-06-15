import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  materia="PAVII";
  validador=true;
  imagen1='https://www.frc.utn.edu.ar/imagenes/logoutn.gif';
  constructor() { }
  

  ngOnInit() {
  }

}