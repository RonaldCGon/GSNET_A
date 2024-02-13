import { ElementRef, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from './admin/navbar/navbar.module';
import { FooterModule } from './admin/footer/footer.module';
import { SidebarModule } from './admin/sidebar/sidebar.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {routes} from './admin-layout.routes'
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NavbarModule,
    FooterModule,
    SidebarModule,
    HttpClientModule,
    RouterModule
  ]
})
export class AdminLayoutModule { }
