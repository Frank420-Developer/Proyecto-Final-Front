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
import {MatSlideToggleModule} from '@angular/material/slide-toggle';


/* Importacion de elementos para Form */
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

/* SOCIAL LOGIN - Módulos para la autenticación con Google */
import { SocialLoginModule, SocialAuthServiceConfig, GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';

/* COMPONENTS */
import { LoginComponent } from './portal/ui/access/login/login.component';
import { PrincipalComponent } from './portal/ui/dashboard/principal/principal.component';
import { CrearFirmaComponent } from './portal/ui/dashboard/crear-firma/crear-firma.component';
import { ProcesosComponent } from './portal/ui/dashboard/procesos/procesos/procesos.component';
import { PermisosComponent } from './portal/ui/dashboard/permisos/permisos/permisos.component';
import { DetalleProcesoComponent } from './portal/ui/dashboard/procesos/detalle-proceso/detalle-proceso.component';
import { FirmaComponent } from './portal/ui/dashboard/procesos/firma/firma.component';
import { SafePipe } from './portal/viewUtils/safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrincipalComponent,
    CrearFirmaComponent,
    ProcesosComponent,
    PermisosComponent,
    DetalleProcesoComponent,
    FirmaComponent,
    SafePipe,
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
    MatSlideToggleModule,
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
              '1083211519138-00b5ui69tc9umhv21otqqi9vtfj2tof0.apps.googleusercontent.com'
            )
          }
        ]
      } as SocialAuthServiceConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
