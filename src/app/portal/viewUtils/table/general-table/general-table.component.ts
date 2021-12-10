import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

/*MODELS  */
import { DataTableModel } from 'src/app/data/models/local/tableModels';
import { BUTTONS } from 'src/app/portal/utils/textsConstantsES';

import { GeneralFunctionsService } from 'src/app/portal/utils/utilFunctions/general-functions.service';
@Component({
  selector: 'app-general-table',
  templateUrl: './general-table.component.html',
  styleUrls: ['./general-table.component.scss']
})
export class GeneralTableComponent implements OnInit {

  @Input() dataInput: DataTableModel; 
  @Output() changePage = new EventEmitter();

  //LISTs
  public headersList: string[];
  public listTable: [];

  //TABLE
  public lengthDataTable: number;
  public pageOptions = [5, 10, 20];

  //FLAGS
  public flag: DataTableModel;
  public activeImage: boolean;
  public activeButton: boolean;
  public activeTwoButtons: boolean;

  //BUTTONS
  public buttons = BUTTONS;

  constructor( public utilities: GeneralFunctionsService ) { 
    this.flag = this.dataInput;
  }

   ngDoCheck(): void {
    if ( this.dataInput !== undefined ) {
      this.prepareData();
    }
  }

  ngOnInit(): void {
  }

   private prepareData() {
    this.flag = this.dataInput;
    this.headersList = this.dataInput.HEADER_TITLES;
    this.listTable = this.dataInput.CONTENT_LIST_TABLE;
    this.activeImage = this.dataInput.ACTIVE_IMAGE;
    this.activeButton = this.dataInput.ACTIVE_BUTTON;
    this.activeTwoButtons = this.dataInput.ACTIVE_TWO_BUTTONS;
    this.lengthDataTable = (this.dataInput.TABLE_LENGTH !== undefined) ? this.dataInput.TABLE_LENGTH : 5;

  }


  public changePageTable(event : any){
    this.changePage.emit(event);

  }
}
