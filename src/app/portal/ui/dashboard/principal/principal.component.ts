import { Component, OnInit } from '@angular/core';

/* COMPONENTS & UTILS */
import * as Images from '../../../utils/imagesRoutes';
import * as TextsES from '../../../utils/textsConstantsES';

/* ROUTER */
import { Router } from '@angular/router';

/* GOOGLE SESSION */
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { SPACE, USER_INFO } from 'src/app/portal/utils/constantsApp';
import { UserInfoModel } from 'src/app/data/models/response/login/login';


/* SERVICES */
import { GeneralFunctionsService } from 'src/app/portal/utils/utilFunctions/general-functions.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  /* IMAGE */
  public logoNaatTech = Images.LOGO_NAAT_TECH;
  public userProfile: string;

  /* TEXTS ESP */
  public mensajeBievenida = TextsES.MENU.WELCOME_TITLE;
  public userName: string;
  public iconExpand = TextsES.MENU.ICON_EXPAND;
  public items = TextsES.MENU.ITEMS;
  public errorMessages = TextsES.ERROR_MESSAGE;

  /* BUTTONS */
  public txtButtons = TextsES.BUTTONS;

  /* DATA RECIEVED */
  private getDataStoraged: UserInfoModel;

  /* WINDOS */
  public windowSize: any;

  /* AUTH */
  public user: SocialUser;

  constructor( private router:Router,
                private authService:SocialAuthService,
                private utilities: GeneralFunctionsService) { }

  ngOnInit(): void {
    this.getDataStoraged = JSON.parse(localStorage.getItem(USER_INFO));
this.userName = this.utilities.getNameOrLastName(this.getDataStoraged.name) + SPACE + this.utilities.getNameOrLastName(this.getDataStoraged.lastName);
this.userProfile=this.getDataStoraged.photo
    //this.validateActiveSession();
  }

  // private validateActiveSession(){
  //   this.getDataStoraged = JSON.parse(localStorage.getItem(USER_INFO));

  //   if( this.getDataStoraged === null || this.getDataStoraged === undefined ){
  //     this.router.navigate(['iniciarSesion']);
  //   }else{
      //  this.userName = this.utilities.getNameOrLastName(this.getDataStoraged.name) + SPACE + this.utilities.getNameOrLastName(this.getDataStoraged.lastName);
      //  this.userProfile=this.getDataStoraged.photo
  //   }
  // }

  public logoutSession(){
    this.authService.signOut().then( (salida: any) =>{
      try {    
        console.log('salida exitosa ',salida);
        
        localStorage.clear();
        this.router.navigate(['iniciarSesion']);
      } catch (error) {
        
        console.log('error en la respuesta ',error);
        
      }
    }).catch(
      err => {
        this.router.navigate(['iniciarSesion']);
      }
    );

  }

  public navigate(ruta: string){
    this.router.navigate([ruta]);
  }
}
