import { Injectable } from '@angular/core';

/* MODELS */
import { ErrorResponseModel } from 'src/app/data/models/errors/generalErrors';

/* CONSTANTS */
import { BUTTONS } from '../textsConstantsES';

/* SERVICES */
import { GeneralFunctionsService } from './general-functions.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorManagerService {

  public txtButtons = BUTTONS;

  constructor( private errorAlert: GeneralFunctionsService) { }

  public validateErrorResponse(errorModel: ErrorResponseModel){
    switch ( errorModel.status ) {
      case 400:
        this.errorAlert.onAlertMessage(errorModel.message, this.txtButtons.OK);
        break;
      case 403:
        this.errorAlert.onAlertMessage(errorModel.message, this.txtButtons.OK);
        break;
      default:
        break;
    }
  }

  public validateErrors(errorStruct: ErrorResponseModel){
    if( errorStruct.status === 400 ){
      this.errorAlert.onAlertMessage(errorStruct.message, this.txtButtons.OK);
    }else if(errorStruct.status === 403 ){
      this.errorAlert.onAlertMessage(errorStruct.message, this.txtButtons.OK);
    }
  }
}
