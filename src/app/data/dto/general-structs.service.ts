import { Injectable } from '@angular/core';

/* Models */
import { HeaderModel } from '../models/local/InputsModels';
import { DataTableModel } from '../models/local/TableModels';

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
    component: any,
    widthDialog?: string): HeaderModel {
    return {
      TITLE: title,
      TEXT_PLACEHOLDER: txtPlaceholder,
      TEXT_ADD_BUTTON: txtButton,
      FLAG_ACTIVE_SEARCH: activeSearch,
      FLAG_ACTIVE_BUTTON: activeButton,
      COMPONENT_DIALOG: component,
      WIDTH_DIALOG: widthDialog
    };
  }


  public createStructTable(
    headerList: string[],
    dataList: any,
    activeImage: boolean,
    activeButton: boolean,
    activeTwoButtons: boolean,
    tableLength?: number,
    sixColum?: boolean ): DataTableModel {

    return {
      HEADER_TITLES: headerList,
      LIST_TABLE: dataList,
      ACTIVE_IMAGE: activeImage,
      ACTIVE_BUTTON: activeButton,
      ACTIVE_TWO_BUTTONS: activeTwoButtons,
      TABLE_LENGTH: tableLength,
      SIX_COLUMN: sixColum
    };

  }


}
