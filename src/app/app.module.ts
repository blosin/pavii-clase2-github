import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MenuComponent } from './menu/menu.component';
import { PrincipalComponent } from './principal/principal.component';
import { Pagina1Component } from './pagina1/pagina1.component';
import { Pagina2Component } from './pagina2/pagina2.component';
import {RouterModule} from '@angular/router';
import { FormulariotablaComponent } from './formulariotabla/formulariotabla.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,
  RouterModule.forRoot([
    {path:'pagina1', component:Pagina1Component},
    {path:'pagina2', component:Pagina2Component},
    {path:'pagina2/:parametro1', component:Pagina2Component},
    {path:'pagina2/:parametro1/:parametro2', component:Pagina2Component},
    
  ]) 
  ],
  declarations: [ MenuComponent, PrincipalComponent, Pagina1Component, Pagina2Component, FormulariotablaComponent ],
  bootstrap:    [ PrincipalComponent ]
})
export class AppModule { }
