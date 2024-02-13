import { Routes } from '@angular/router';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { PerfilesComponent } from './perfiles/perfiles.component';
import { AsignacionmenuComponent } from './asignacionmenu/asignacionmenu.component';

export const routes: Routes =[
    {
        path: 'usuarios',
        component: UsuariosComponent,           
    },
    {
        path: 'perfiles',
        component: PerfilesComponent,           
    },
    {
        path: 'asignacionmenu',
        component: AsignacionmenuComponent,           
    },
];