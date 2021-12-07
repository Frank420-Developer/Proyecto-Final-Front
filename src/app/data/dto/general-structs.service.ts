import { Injectable } from '@angular/core';

/* Models */
import { HeaderModel, SecondHeaderModel } from '../models/local/InputsModels';
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


  public createSecondStructHeader(  title: string, titleC1: string, descriptionC1: string,
                                    titleC2: string, descriptionC2: string,
                                    activeAllColumns: boolean, activeColumnFour: boolean,
                                    previewPAge: string,
                                    titleC3?: string, descriptionC3?: string, titleC4?: string, descriptionC4?: string): SecondHeaderModel {
      return {
        TITLE: title,
        COLUMN_ONE: {
          TITLE: titleC1,
          DESCRIPTION: descriptionC1
        },
        COLUMN_TWO: {
          TITLE: titleC2,
          DESCRIPTION: descriptionC2
        },
        COLUMN_THREE: {
          TITLE: titleC3,
          DESCRIPTION: descriptionC3
        },
        COLUMN_FOUR: {
          TITLE: titleC4,
          DESCRIPTION: descriptionC4
        },
        ACTIVE_ALL_COLUMNS: activeAllColumns,
        ACTIVE_COLUMN_FOUR: activeColumnFour,
        PREVIEW_PAGE: previewPAge
      };
    }


}
