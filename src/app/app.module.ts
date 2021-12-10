import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* CONEXIONES A INTERNET  */
import { HttpClientModule } from '@angular/common/http';

/* ANGULAR MATERIAL */
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
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

/* Importacion de elementos para Form */
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

/* SOCIAL LOGIN */


/* COMPONENTS */
import { LoginComponent } from './portal/ui/access/login/login.component';
import { PrincipalComponent } from './portal/ui/dashboard/principal/principal.component';
import { ProyectosComponent } from './portal/ui/dashboard/proyectos/proyectos.component';
import { EquiposComponent } from './portal/ui/dashboard/equipos/equipos.component';
import { ActividadesComponent } from './portal/ui/dashboard/actividades/actividades.component';
import { NoticiasComponent } from './portal/ui/dashboard/noticias/noticias.component';
import { ClientesComponent } from './portal/ui/dashboard/clientes/clientes.component';
import { NotificacionesComponent } from './portal/ui/dashboard/notificaciones/notificaciones.component';
import { UsuariosComponent } from './portal/ui/dashboard/usuarios/usuarios.component';
import { DetalleProyectoComponent } from './portal/ui/dashboard/proyectos/detalle-proyecto/detalle-proyecto.component';
import { DialogAddProjectComponent } from './portal/viewUtils/dialog/dialog-add-project/dialog-add-project.component';
import { GeneralTableComponent } from './portal/viewUtils/table/general-table/general-table.component';
import { SimpleTableComponent } from './portal/viewUtils/table/simple-table/simple-table.component';
import { GeneralHeadersComponent } from './portal/viewUtils/headers/general-headers/general-headers.component';
import { DialogAddTeamComponent } from './portal/viewUtils/dialog/dialog-add-team/dialog-add-team.component';
import { ActiveNewsComponent } from './portal/ui/dashboard/noticias/active-news/active-news.component';
import { DraftsNewsComponent } from './portal/ui/dashboard/noticias/drafts-news/drafts-news.component';
import { SuspendsNewsComponent } from './portal/ui/dashboard/noticias/suspends-news/suspends-news.component';
import { DialogAddClientComponent } from './portal/viewUtils/dialog/dialog-add-client/dialog-add-client/dialog-add-client.component';
import { DialogAddNotificationComponent } from './portal/viewUtils/dialog/dialog-add-notification/dialog-add-notification/dialog-add-notification.component';
import { DialogAddNewsComponent } from './portal/viewUtils/dialog/dialog-add-news/dialog-add-news/dialog-add-news.component';
import { DragAndDropZoneDirective } from './portal/viewUtils/directivas/drag-and-drop-zone.directive';
import { SecondHeadersComponent } from './portal/viewUtils/headers/second-headers/second-headers.component';
import { ProyectosPrincipalComponent } from './portal/ui/dashboard/proyectos/proyectos-principal/proyectos-principal.component';

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
    NotificacionesComponent,
    UsuariosComponent,
    DetalleProyectoComponent,
    DialogAddProjectComponent,
    GeneralTableComponent,
    SimpleTableComponent,
    GeneralHeadersComponent,
    DialogAddTeamComponent,
    ActiveNewsComponent,
    DraftsNewsComponent,
    SuspendsNewsComponent,
    DialogAddClientComponent,
    DialogAddNotificationComponent,
    DialogAddNewsComponent,
    DragAndDropZoneDirective,
    SecondHeadersComponent,
    ProyectosPrincipalComponent,
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
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  entryComponents: [
    DialogAddProjectComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
