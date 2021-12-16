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
import { MatGridListModule } from '@angular/material/grid-list';

/* Importacion de elementos para Form */
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

/* SOCIAL LOGIN - Módulos para la autenticación con Google */
import { SocialLoginModule, SocialAuthServiceConfig, GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';

/* COMPONENTS */
import { LoginComponent } from './portal/ui/access/login/login.component';
import { PrincipalComponent } from './portal/ui/dashboard/principal/principal.component';
import { GeneralTableComponent } from './portal/viewUtils/table/general-table/general-table.component';
import { SimpleTableComponent } from './portal/viewUtils/table/simple-table/simple-table.component';
import { DragAndDropZoneDirective } from './portal/viewUtils/directivas/drag-and-drop-zone.directive';
import { CrearFirmaComponent } from './portal/ui/dashboard/crear-firma/crear-firma.component';
import { ProcesosComponent } from './portal/ui/dashboard/procesos/procesos/procesos.component';
import { PermisosComponent } from './portal/ui/dashboard/permisos/permisos/permisos.component';
import { DetalleProcesoComponent } from './portal/ui/dashboard/procesos/detalle-proceso/detalle-proceso.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrincipalComponent,
    GeneralTableComponent,
    SimpleTableComponent,
    DragAndDropZoneDirective,
    CrearFirmaComponent,
    ProcesosComponent,
    PermisosComponent,
    DetalleProcesoComponent,
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
    SocialLoginModule,
    MatGridListModule,
  ],
  entryComponents: [
    
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '100113038197-6igeai7v21jecg5nna3h7k4gccjsqf1i.apps.googleusercontent.com'
            )
          }
        ]
      } as SocialAuthServiceConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
