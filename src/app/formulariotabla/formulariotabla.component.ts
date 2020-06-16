import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormGroup, FormsModule} from '@angular/forms';
@Component({
  selector: 'app-formulariotabla',
  templateUrl: './formulariotabla.component.html',
  styleUrls: ['./formulariotabla.component.css']
})
export class FormulariotablaComponent implements OnInit {

  fg: FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.fg = this.fb.group({
      id: [''],
      nombre:['']
    })
  }
  grabar(){
  
}
}
/*Agregar los importa
constructor
fg atributo
ng onnitit*/

