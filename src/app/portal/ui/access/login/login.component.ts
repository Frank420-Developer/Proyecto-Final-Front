import { Component, OnInit } from '@angular/core';

/* NAVIGATION */
import { Router } from '@angular/router';

/* CONSTANT AND UTILITIES */
import * as Images from '../../../utils/imagesRoutes';
import * as TextsES from '../../../utils/textsConstantsES';

/* FORM */
import { FormGroup, FormBuilder, AbstractControl, Validators } from '@angular/forms';

/* SERVICES */
import { LoginsServiceService } from 'src/app/data/network/login/logins-service.service';
import { UsersService } from 'src/app/data/network/users/users.service';


/* MODELS */
import { LoginRequest, RefreshTokenRequest } from 'src/app/data/models/request/login/login';
import { LoginResponse, RefreshTokenResponse } from 'src/app/data/models/response/login/login';
import { HttpParams, HttpResponse } from '@angular/common/http';
import { UsersListResponse } from 'src/app/data/models/response/users/users';


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

  constructor(  private router: Router,
                private formBuilder: FormBuilder,
                private api: LoginsServiceService,
                private apiUsers: UsersService) {

    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.pattern('[a-z A-Z 0-9]{6,15}')])]
    });

    this.email = this.loginForm.controls.email;
    this.password = this.loginForm.controls.password;
    this.password.disable();
  }
  ngOnInit(): void {
  }

  public doLogin():void{
    this.loginForm.reset();
    this.router.navigate(['dashboard'])
  }

  public validateEmailFormat(){
    if(this.email.valid){
      this.password.enable();
    }else{
      this.password.disable();
    }
  }

  private postLogin(){
    const body: LoginRequest = {
      authorizationCode: ''
    };

    this.api.postLogin(body).subscribe( (dataResponse: LoginResponse) =>{
      try {
        this.postRefreshToken(dataResponse.refreshToken);
      } catch (error) {
        
      }
    }, errorResponse => {});
  }

  private postRefreshToken(token: string){
    const body: RefreshTokenRequest = {
      refreshToken: token
    };

    this.api.postRefreshToken(body).subscribe( (dataResponse: RefreshTokenResponse) =>{
      try {
        //
      } catch (error) {
        
      }
    }, errorResponse => {});
  }

  public loginWithoutGoogleApi(){
    const params = new HttpParams()
                      .set('email', this.email.value);
    this.apiUsers.getUsersList(params).subscribe( (data: HttpResponse<UsersListResponse[]>) =>{
      try {
        if(data.body.length > 0){
          console.log('entro al if');
          
          this.doLogin();
        }else{
          console.log('entro al else');
          this.loginForm.reset();
        }
      } catch (error) {
        
      }
    });
  }
}
