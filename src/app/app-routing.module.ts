import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* UI Component */
import { LoginComponent } from './portal/ui/access/login/login.component';
import { CrearFirmaComponent } from './portal/ui/dashboard/crear-firma/crear-firma.component';
import { PermisosComponent } from './portal/ui/dashboard/permisos/permisos/permisos.component';
import { PrincipalComponent } from './portal/ui/dashboard/principal/principal.component';
import { DetalleProcesoComponent } from './portal/ui/dashboard/procesos/detalle-proceso/detalle-proceso.component';
import { FirmaComponent } from './portal/ui/dashboard/procesos/firma/firma.component';
import { ProcesosComponent } from './portal/ui/dashboard/procesos/procesos/procesos.component';


const routes: Routes = [
  {
    path: 'iniciarSesion',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: PrincipalComponent,
  },
  {
  path: 'crearFirma',
  component: CrearFirmaComponent,
  },
  {
    path: 'procesos',
    component: ProcesosComponent,
  },
  {
    path: 'detalleProceso/:id',
    component: DetalleProcesoComponent
  },
  {
    path: 'firmar/:ticket',
    component: FirmaComponent,
  },
  {
    path: 'permisos',
    component: PermisosComponent,
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
{
  path: '',
  redirectTo: 'iniciarSesion',
  pathMatch: 'full'
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
