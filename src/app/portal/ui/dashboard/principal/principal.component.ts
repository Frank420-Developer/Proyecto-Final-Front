import { Component, OnInit } from '@angular/core';

/* Importación de router */
import { Router } from '@angular/router';

/* Constants and images */
import * as Image from '../../../utilis/ImagesRoutes';
import * as TextsES from '../../../utilis/TextsConstantsES';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  // Images
  public logoNaAT = Image.LOGO_NAAT_TECH;

  // Texts
  public menuTxt = TextsES.MENU;
  public buttonsTxt = TextsES.BUTTONS;
  public errorMessage = TextsES.ERROR_MESSAGE;

  // Window Size
  private windowSize: any;

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }


  public logaoutSession() {
    localStorage.clear();
    this.router.navigate(['login']);
  }


  public verifyScreen() {
    this.windowSize = window.innerWidth;

    if ( this.windowSize < 1024 ) {
      return false;
    }
    return true;
  }

}
