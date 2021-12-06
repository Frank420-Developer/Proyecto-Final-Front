import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* UI Components */
import { LoginComponent } from './portal/ui/access/login/login.component';
import { PrincipalComponent } from './portal/ui/dashboard/principal/principal.component';
import { ProyectosComponent } from './portal/ui/dashboard/proyectos/proyectos.component';
import { EquiposComponent } from './portal/ui/dashboard/equipos/equipos.component';
import { ActividadesComponent } from './portal/ui/dashboard/actividades/actividades.component';
import { NoticiasComponent } from './portal/ui/dashboard/noticias/noticias.component';
import { ClientesComponent } from './portal/ui/dashboard/clientes/clientes.component';
import { UsuariosComponent } from './portal/ui/dashboard/usuarios/usuarios.component';
import { NotificacionesComponent } from './portal/ui/dashboard/notificaciones/notificaciones.component';
import { DetallesProyectoComponent } from './portal/ui/dashboard/detalles-proyecto/detalles-proyecto.component';
import { ProyectosPrincipalComponent } from './portal/ui/dashboard/proyectos/proyectos-principal/proyectos-principal.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  }, {
    path: 'dashboard',
    component: PrincipalComponent,
    children: [{
        path: 'proyectos',
        component: ProyectosComponent,
        children: [{
          path: 'proyectosPrincipal',
          component: ProyectosPrincipalComponent
        }, {
          path: 'detalleProyecto',
          component: DetallesProyectoComponent
        }, {
          path: '',
          redirectTo: 'proyectosPrincipal',
          pathMatch: 'full'
        }
      ]
      }, {
        path: 'equipos',
        component: EquiposComponent
      }, {
        path: 'actividades',
        component: ActividadesComponent
      }, {
        path: 'noticias',
        component: NoticiasComponent
      }, {
        path: 'clientes',
        component: ClientesComponent
      }, {
        path: 'usuarios',
        component: UsuariosComponent
      }, {
        path: 'notificaciones',
        component: NotificacionesComponent
      }, {
        path: '',
        redirectTo: 'proyectos',
        pathMatch: 'full'
      }
    ]
  }, {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
