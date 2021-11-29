import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* Conexiones a internet */
import { HttpClientModule } from '@angular/common/http';

/* Angular Material */
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatMenuModule } from '@angular/material/menu';
import { MatAutocompleteModule } from '@angular/material/autocomplete';


/* Importacion de elementos para Form */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


/* Components */
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
import { DialogAddProjectComponent } from './portal/viewUtils/dialog/dialog-add-project/dialog-add-project.component';
import { GeneralTableComponent } from './portal/viewUtils/table/general-table/general-table.component';
import { SimpleTableComponent } from './portal/viewUtils/table/simple-table/simple-table.component';
import { GeneralHeaderComponent } from './portal/viewUtils/headers/general-header/general-header.component';
import { DialogAddTeamComponent } from './portal/viewUtils/dialog/dialog-add-team/dialog-add-team.component';
import { ActivadasComponent } from './portal/ui/dashboard/noticias/activadas/activadas.component';
import { BorradoresComponent } from './portal/ui/dashboard/noticias/borradores/borradores.component';
import { SuspendidasComponent } from './portal/ui/dashboard/noticias/suspendidas/suspendidas.component';
import { DialogAddClientComponent } from './portal/viewUtils/dialog/dialog-add-client/dialog-add-client.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrincipalComponent,
    ProyectosComponent,
    EquiposComponent,
    ActividadesComponent,
    NoticiasComponent,
    ClientesComponent,
    UsuariosComponent,
    NotificacionesComponent,
    DetallesProyectoComponent,
    DialogAddProjectComponent,
    GeneralTableComponent,
    SimpleTableComponent,
    GeneralHeaderComponent,
    DialogAddTeamComponent,
    ActivadasComponent,
    BorradoresComponent,
    SuspendidasComponent,
    DialogAddClientComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatAutocompleteModule,
  ],
  entryComponents: [
    DialogAddProjectComponent, // se deja como referencia de implementacion para versiones
    // anteriores de angular (en la version 9 ya está deprecado).
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
