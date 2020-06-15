import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MenuComponent } from './menu/menu.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ MenuComponent ],
  bootstrap:    [ MenuComponent ]
})
export class AppModule { }
