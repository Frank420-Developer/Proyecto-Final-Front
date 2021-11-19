import { Component, OnInit } from '@angular/core';

/* Navigation */
import { Router } from '@angular/router';

/* Constants and utilities */
import * as Images from '../../../utilis/ImagesRoutes';
import * as TextsES from '../../../utilis/TextsConstantsES';

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

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  public doLogin(): void {
    this.router.navigate(['dashboard']);
  }

}
