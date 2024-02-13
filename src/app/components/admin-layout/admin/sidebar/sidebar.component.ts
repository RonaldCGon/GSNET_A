import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

declare interface RouteInfoCabecera {
    title: string;
    icon: string;
    class: string;
    lista: RouteInfoDetalle[]
}
declare interface RouteInfoDetalle {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const routesSubMenu: RouteInfoDetalle[]=[
  { path: '/admin/sistema/perfiles', title: 'Perfiles',  icon:'', class: '' },
  { path: '/admin/sistema/usuarios', title: 'Usuarios',  icon:'', class: '' },
  { path: '/admin/sistema/asignacionmenu', title: 'Asignacion Menu',  icon:'', class: '' },
]
export const ROUTES: RouteInfoCabecera[] = [
    //{ path: '/admin/home', title: 'Home',  icon: 'pe-7s-graph', class: '' },
    {  title: 'Sistema',  icon:'bi bi-gear-fill', class: '', lista : routesSubMenu},
    {  title: 'Sistema2',  icon:'bi bi-gear-fill', class: '', lista : routesSubMenu},
];

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  menuItems!: any[];
  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    console.log(this.menuItems)
  }
  isMobileMenu() {
      if (window.innerWidth > 991) {
          return false;
      }
      return true;
  };
}
