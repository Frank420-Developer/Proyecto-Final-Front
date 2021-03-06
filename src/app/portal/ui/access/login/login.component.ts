import { Component, OnInit } from '@angular/core';

/* HTTP */
import { HttpParams, HttpResponse } from '@angular/common/http';

/* NAVIGATION */
import { Router } from '@angular/router';

/* CONSTANT AND UTILITIES */
import * as Images from '../../../utils/imagesRoutes';
import * as TextsES from '../../../utils/textsConstantsES';
import { USER_INFO } from 'src/app/portal/utils/constantsApp';

/* FORM */
import { FormGroup, FormBuilder, AbstractControl, Validators } from '@angular/forms';

/* SERVICES */
import { LoginsServiceService } from 'src/app/data/network/login/logins-service.service';

/* GOOGLE AUTHENTICATION */
import { SocialAuthService, SocialUser, GoogleLoginProvider} from 'angularx-social-login';

/* MODELS */
import { LoginResponseWithFad, LoginWithGoogleModel, UserInfoModel } from 'src/app/data/models/response/login/login';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  /* IMAGE */
  public logoNaatTech = Images.LOGO_NAAT_TECH;

  /* TEXTS */
  public texts = TextsES.LOGIN;
  public txtInputs = TextsES.INPUTS;
  public txtButtons = TextsES.BUTTONS;

  /* FORMULARIO */
  public loginForm: FormGroup;
  public email: AbstractControl;
  public password: AbstractControl;

  /* DATA RECIEVED */
  public getDataStoraged: UserInfoModel;

  /* AUTH */
  public user: SocialUser;

  constructor(  private router: Router,
                private formBuilder: FormBuilder,
                private api: LoginsServiceService,
                private authService: SocialAuthService) {

    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.pattern('[a-z A-Z 0-9]{6,15}')])]
    });

    this.email = this.loginForm.controls.email;
    this.password = this.loginForm.controls.password;
    this.password.disable();
  }
  ngOnInit(): void {
    this.validateActiveSession();
    this.authService.authState.subscribe( (userResponse: SocialUser) =>{
      this.user = userResponse;
    });
  }
 

  private validateActiveSession(){
    
    this.getDataStoraged = JSON.parse(localStorage.getItem(USER_INFO));

    if( this.getDataStoraged !== null ){
      this.router.navigate(['dashboard']);
    }
  }


  public doLogin():void{
    this.loginForm.reset();
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then( (info: LoginWithGoogleModel) =>{
      
      const userInfo: UserInfoModel = {
        email: info.email,
        name: info.firstName,
        lastName: info.lastName,
        photo: info.photoUrl
      };
      
    this.api.postLoginAuthWithFad().subscribe( (data: LoginResponseWithFad) => {
      try {
        let accessToken = data.access_token;
      localStorage.setItem("access_token", JSON.stringify(accessToken));
      } catch (error) {
        
      }
    }, errorResponse => {
      
      
      this.router.navigate(['iniciarSesion']);
    });
    localStorage.setItem(USER_INFO, JSON.stringify(userInfo));  
    this.router.navigate(['dashboard'])
    
    });
  }

  public doLoginWithOutGoogle(): void{
    const userInfo: UserInfoModel = {
        email: 'fvera@na-at.com.mx',
        name: 'Francisco Javier',
        lastName: 'Vera Bocanegra',
        photo: 'https://lh3.googleusercontent.com/a-/AOh14GiwHAasr-POWY_KJjOHV9cruOKPwhT0bhZV2Mfp=s96-c'
      };
    localStorage.setItem(USER_INFO, JSON.stringify(userInfo));  
    this.router.navigate(['dashboard'])
  }

}
