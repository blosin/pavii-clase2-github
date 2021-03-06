import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.component.html',
  styleUrls: ['./pagina2.component.css']
})
export class Pagina2Component implements OnInit {

  parametro:string;
  
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.parametro= this.route.snapshot.paramMap.get("parametro1");

  }

  /*
  1- agregar parametro.
  2- agregar importo
  3- agregar al privado route
  */

}