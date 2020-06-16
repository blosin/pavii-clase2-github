import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.component.html',
  styleUrls: ['./pagina2.component.css']
})
export class Pagina2Component implements OnInit {

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    let parametro= +this.route.snapshot.paramMap.get("id");

  }

  /*
  1- agregar parametro.
  2- agregar importo
  3- agregar al privado route
  */

}