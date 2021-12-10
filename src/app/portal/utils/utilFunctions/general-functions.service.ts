import { Injectable } from '@angular/core';

/* ANGULAR MATERIAL */
import { MatSnackBar } from '@angular/material/snack-bar';

/* CONSTANTS */
import { COLONS, SLASH, TIME_SNACK_BAR } from '../constantsApp';

@Injectable({
  providedIn: 'root'
})
export class GeneralFunctionsService {

  constructor( private snackBar: MatSnackBar) { }


  public generateProjectKey(projectName: string):string{
    return projectName.toUpperCase().trim().split(" ").join("_");
  }

  public onAlertMessage(message: string, txtBtnAction: string){
    this.snackBar.open(message, txtBtnAction, {
      duration: TIME_SNACK_BAR,
    });
  }

   public getFormatDate(date: string): string {
    const dateSplit = date.split('T');
    const dateSplitFormat = dateSplit[0].split('-');
    return dateSplitFormat[2] + SLASH + dateSplitFormat[1] + SLASH + dateSplitFormat[0];
  }

   public getFormatHour(hour: string): string {
    const hourSplit = hour.split('T');
    const hourSplitFormat = hourSplit[1].split(':');
    return hourSplitFormat[0] + COLONS + hourSplitFormat[1];
  }



}
