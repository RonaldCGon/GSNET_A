import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from './login/login.module';
import { AdminLayoutModule } from './admin-layout/admin-layout.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginModule,
    AdminLayoutModule,
    RouterModule
  ]
})
export class ComponentsModule { }
