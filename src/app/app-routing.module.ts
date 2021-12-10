import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* UI Component */
import { LoginComponent } from './portal/ui/access/login/login.component';
import { PrincipalComponent } from './portal/ui/dashboard/principal/principal.component';
import { ProyectosComponent } from './portal/ui/dashboard/proyectos/proyectos.component';
import { EquiposComponent } from './portal/ui/dashboard/equipos/equipos.component';
import { NoticiasComponent } from './portal/ui/dashboard/noticias/noticias.component';
import { ActividadesComponent } from './portal/ui/dashboard/actividades/actividades.component';
import { ClientesComponent } from './portal/ui/dashboard/clientes/clientes.component';
import { NotificacionesComponent } from './portal/ui/dashboard/notificaciones/notificaciones.component';
import { UsuariosComponent } from './portal/ui/dashboard/usuarios/usuarios.component';
import { DetalleProyectoComponent } from './portal/ui/dashboard/proyectos/detalle-proyecto/detalle-proyecto.component';
import { ProyectosPrincipalComponent } from './portal/ui/dashboard/proyectos/proyectos-principal/proyectos-principal.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: PrincipalComponent,
    children: [
      {
        path: 'proyectos',
        component: ProyectosComponent,
        children: [
          {
            path: 'proyectosPrincipal',
            component: ProyectosPrincipalComponent,
          },
          {
            path: 'detalleProyecto/:client/:project',
            component: DetalleProyectoComponent,
          },
          {
            path: '',
            redirectTo: 'proyectosPrincipal',
            pathMatch: 'full'
          }
        ]
      },
      {
        path: 'equipos',
        component: EquiposComponent
      },
      {
        path: 'noticias',
        component: NoticiasComponent
      },
      {
        path: 'actividades',
        component: ActividadesComponent
      },
      {
        path: 'clientes',
        component: ClientesComponent
      },
      {
        path: 'notificaciones',
        component: NotificacionesComponent
      },
      {
        path: 'usuarios',
        component: UsuariosComponent
      },
      {
        path: '',
        redirectTo: 'proyectos',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
