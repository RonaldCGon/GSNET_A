import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule,SidebarComponent
  ],
  exports: [ SidebarComponent ]
})
export class SidebarModule { }
