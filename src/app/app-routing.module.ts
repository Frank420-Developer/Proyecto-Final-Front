import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* UI Component */
import { LoginComponent } from './portal/ui/access/login/login.component';
import { CrearFirmaComponent } from './portal/ui/dashboard/crear-firma/crear-firma.component';
import { PrincipalComponent } from './portal/ui/dashboard/principal/principal.component';


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
          path: 'crearFirma',
          component: CrearFirmaComponent,
          },
          {
            path: 'procesos',
            component: PrincipalComponent,
          },
          {
            path: 'permisos',
            component: PrincipalComponent,
          },
          // {
          //   path: '',
          //   redirectTo: 'crearFirma',
          //   pathMatch: 'full'
          // },
      {
        path: '',
        redirectTo: 'dashboard',
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
