import { Injectable } from '@angular/core';

/* Models */
import { HeaderModel } from '../models/local/InputsModels';

@Injectable({
  providedIn: 'root'
})
export class GeneralStructsService {

  constructor() { }

  public createStructHeader(
    title: string,
    txtPlaceholder: string,
    txtButton: string,
    activeSearch: boolean,
    activeButton: boolean,
    component: any): HeaderModel {
    return {
      TITLE: title,
      TEXT_PLACEHOLDER: txtPlaceholder,
      TEXT_ADD_BUTTON: txtButton,
      FLAG_ACTIVE_SEARCH: activeSearch,
      FLAG_ACTIVE_BUTTON: activeButton,
      COMPONENT_DIALOG: component
    };
  }
}
