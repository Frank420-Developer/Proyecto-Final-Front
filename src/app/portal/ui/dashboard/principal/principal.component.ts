import { Component, OnInit } from '@angular/core';

/* COMPONENTS & UTILS */
import * as Images from '../../../utils/imagesRoutes';
import * as TextsES from '../../../utils/textsConstantsES';

/* ROUTER */
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  /* IMAGE */
  public logoNaatTech = Images.LOGO_NAAT_TECH;
  public userProfile = Images.USER_PROFILE;

  /* TEXTS ESP */
  public mensajeBievenida = TextsES.MENU.WELCOME_TITLE;
  public userName = TextsES.MENU.DEFAULT_USER;
  public iconExpand = TextsES.MENU.ICON_EXPAND;
  public items = TextsES.MENU.ITEMS;
  public errorMessages = TextsES.ERROR_MESSAGE;

  /* BUTTONS */
  public txtButtons = TextsES.BUTTONS;

  /* WINDOS */
  public windowSize: any;

  constructor( private router:Router) { }

  ngOnInit(): void {
  }

  public logoutSession(){
    localStorage.clear();
    this.router.navigate(['login'])
  }

  public verifyScreen(){
    this.windowSize = window.innerWidth;

    if(this.windowSize < 1024){
      return false;
    }

    return true
  }
}
