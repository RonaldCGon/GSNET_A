import { CommonModule,Location,PopStateEvent } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { SidebarComponent } from "./sidebar/sidebar.component";
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { Subscription, filter } from 'rxjs';

@Component({
    selector: 'app-admin',
    standalone: true,
    templateUrl: './admin.component.html',
    styleUrl: './admin.component.css',
    imports: [CommonModule,
         RouterModule, 
         SidebarComponent,
         NavbarComponent,
         FooterComponent,
         RouterOutlet,RouterLink,
         RouterLinkActive
        ]
})
export class AdminComponent {

}


