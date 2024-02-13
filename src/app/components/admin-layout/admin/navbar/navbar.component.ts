import { CommonModule,Location } from '@angular/common';
import { Component, ElementRef,HostListener } from '@angular/core';
import {  RouterModule } from '@angular/router';
import { ROUTES } from '../sidebar/sidebar.component';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  public ismobile:boolean=false;
  constructor(){
    this.isMobileMenu();
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: any; }; }) {
    this.isMobileMenu();
  }
  isMobileMenu() {
    console.log(window.innerWidth)
    if (window.innerWidth > 991) {
      this.ismobile= false;
      console.log(this.ismobile)
      return;
    }
    this.ismobile= true;
    console.log(this.ismobile)
    return;
  };
}
