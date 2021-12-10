import { Component, OnInit } from '@angular/core';

/* Navigation */
import { Router } from '@angular/router';

/* Importaciones de form  */
import { FormGroup, FormBuilder, AbstractControl, Validators } from '@angular/forms';

/* Importaciones de servicios */
import { LoginServiceService } from 'src/app/data/network/login/login-service.service';

/* Constants and utilities */
import * as Images from '../../../utilis/ImagesRoutes';
import * as TextsES from '../../../utilis/TextsConstantsES';
import { LoginRequest, RefreshTokenRequest } from 'src/app/data/models/request/login/LoginRequest';
import { LoginResponse } from 'src/app/data/models/response/login/LoginResponse';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  /* Image */
  public logoNaAtTech = Images.LOGO_NAAT_TECH;

  /* Texts */
  public texts = TextsES.LOGIN;
  public inputText = TextsES.INPUTS;
  public buttonText = TextsES.BUTTONS;

  // Form
  public loginForm: FormGroup;
  public email: AbstractControl;
  public password: AbstractControl;

  constructor( private router: Router,
               private formBuilder: FormBuilder,
               private api: LoginServiceService ) {
    // Form
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose( [ Validators.required, Validators.email ] ) ],
      password: ['', Validators.compose( [ Validators.required, Validators.pattern('[a-z A-Z 0-9]{6,15}') ] )]
    });

    this.email = this.loginForm.controls.email;
    this.password = this.loginForm.controls.password;
    this.password.disable();
  }

  ngOnInit(): void {
  }

  public doLogin(): void {
    this.loginForm.reset();

    this.router.navigate(['dashboard']);
  }

  public validateEmailFormt() {
    if ( this.email.valid ) {
      this.password.enable();
    } else {
      this.password.disable();
    }
  }

  private postLogin(): void {
    const body: LoginRequest = {
      authorizationCode: ''
    };

    this.api.postLogin(body).subscribe( (dataResponse: LoginResponse) => {
      try {
        this.postRefreshToken(dataResponse.refreshToken);
      } catch (err) {}
    }, errorResponse => {});
  }


  private postRefreshToken(token: string): void {
    const body: RefreshTokenRequest = {
      refreshToken: token
    };

    this.api.postRefreshToken(body).subscribe( (dataResponse) => {
      try {
        //
      } catch (err) {}
    }, errorResponse => {});
  }

}
