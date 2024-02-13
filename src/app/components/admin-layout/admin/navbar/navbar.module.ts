import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule,NavbarComponent
  ],
  exports: [ NavbarComponent ]
})
export class NavbarModule { }
