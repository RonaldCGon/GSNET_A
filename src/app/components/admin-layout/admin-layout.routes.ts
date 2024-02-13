import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AdminComponent } from './admin/admin.component';

export const routes: Routes =[
         {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
        }, 
        {
            path: 'sistema',
            loadChildren: () => import('../sistema/sistema.routes').then(x => x.routes)
        } ,
        {
            path: 'home',
            component: HomeComponent,           
        }, 
        {
            path: '**',
            redirectTo: 'home'
        },
  ];
