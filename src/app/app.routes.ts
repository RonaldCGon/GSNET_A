import { Routes } from '@angular/router';
import { AdminComponent } from './components/admin-layout/admin/admin.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes =[
    {
      path: '',
      redirectTo: '/admin/home',
      pathMatch: 'full',
    }, 
    {
      path: 'admin',
      component: AdminComponent,
      loadChildren: () => import('./components/admin-layout/admin-layout.routes').then(x => x.routes)
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
      path: '**',
      redirectTo: '/admin/home'
    }
  ];