import { Injectable } from '@angular/core';

/* Importaciones de angular material */
import { MatSnackBar } from '@angular/material/snack-bar';

/* Importaciones de constantes */
import { TIME_SNACK_BAR } from '../ConstantsApp';

@Injectable({
  providedIn: 'root'
})
export class GeneralFunctionsService {

  constructor( private snackBar: MatSnackBar ) { }


  public generateProjectKey(projectName: string): string {
    projectName = projectName.toUpperCase().trim();
    return projectName.split(' ').join('_');
  }


  public onAlertMessage(message: string, txtBtnAction: string) {
    this.snackBar.open(message, txtBtnAction, {
      duration: TIME_SNACK_BAR
    });
  }

}
