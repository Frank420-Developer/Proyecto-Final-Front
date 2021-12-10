import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Injectable } from '@angular/core';

/* MODELS */
import { HeaderModel, SecondHeaderModel } from '../models/local/inputsModels';
import { DataTableModel, StructDataTableModel } from '../models/local/tableModels';

@Injectable({
  providedIn: 'root'
})
export class GeneralStructsService {

  constructor() { }

  public createHeaderStruct(
    title: string, 
    txtPlaceholder:string, 
    txtButton: string, 
    activeSearch:boolean, 
    activeBtn: boolean, 
    componentDialog: any,
    dialogWidth?: string):HeaderModel{
    return { 
      TITLE: title,
      TEXT_PLACEHOLDER: txtPlaceholder,
      TEXT_ADD_BUTTON: txtButton,
      FLAG_ACTIVE_BUTTON: activeBtn,
      FLAG_ACTIVE_SEARCH: activeSearch,
      COMPONENT_DIALOG: componentDialog,
      WIDTH_DIALOG: dialogWidth,
    }
  }

  public createSecondHeaderStruct(
    title: string,
    titleC1: string,
    descC1: string,
    titleC2: string,
    decC2: string,
    activeAllColumns: boolean,
    activeColumnFour: boolean,
    previousPage: string,
    titleC3?: string,
    descC3?: string,
    titleC4?: string,
    descC4?: string,
  ):SecondHeaderModel{
    return {
      TITLE: title,
      COLUMN_ONE: {
        TITLE: titleC1,
        DESCRIPTION: descC1
      },
      COLUMN_TWO: {
        TITLE: titleC2,
        DESCRIPTION: decC2,
      },
      COLUMN_THREE: {
        TITLE: titleC3,
        DESCRIPTION: descC3,
      },
      COLUMN_FOUR: {
        TITLE: titleC4,
        DESCRIPTION: descC4
      },
      ACTIVE_ALL_COLUMNS: activeAllColumns,
      ACTIVE_COLUMN_FOUR: activeColumnFour,
      PREVIOUS_PAGE: previousPage,
    }
  }

  public createStructTable(
    headerList: string[], 
    dataList:any, 
    activeImage: boolean, 
    activeButton: boolean, 
    activeTwoButtons: boolean, 
    tableLength?: number,
    sixColumn?: boolean): DataTableModel{
    return {
      HEADER_TITLES: headerList,
      CONTENT_LIST_TABLE: dataList,
      ACTIVE_IMAGE: activeImage,
      ACTIVE_BUTTON: activeButton,
      ACTIVE_TWO_BUTTONS: activeTwoButtons,
      TABLE_LENGTH: tableLength,
      SIX_COLUMN: sixColumn,
    };
  }

}
