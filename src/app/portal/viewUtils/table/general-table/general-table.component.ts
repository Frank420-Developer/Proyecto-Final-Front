import { Component, OnInit, Input, Output, EventEmitter, DoCheck } from '@angular/core';

/* Models */
import { DataTableModel } from 'src/app/data/models/local/TableModels';

/* Importación de utilidades y constantes */
import { GeneralFunctionsService } from 'src/app/portal/utilis/utilFunctions/general-functions.service';
@Component({
  selector: 'app-general-table',
  templateUrl: './general-table.component.html',
  styleUrls: ['./general-table.component.scss']
})
export class GeneralTableComponent implements OnInit, DoCheck {
  @Input() dataInput: DataTableModel;
  @Output() changePage = new EventEmitter();

  // List
  public headersList = [];
  public listTable = [];

  // Flags
  public flag: DataTableModel;
  public activeImage: boolean;
  public activeButton: boolean;
  public activeTwoButtons: boolean;

  // Table
  public lenghtDataTable: number;

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
    console.log('Datos', this.dataInput);
    this.flag = this.dataInput;
    this.headersList = this.dataInput.HEADER_TITLES;
    this.listTable = this.dataInput.LIST_TABLE;
    this.activeImage = this.dataInput.ACTIVE_IMAGE;
    this.activeButton = this.dataInput.ACTIVE_BUTTON;
    this.activeTwoButtons = this.dataInput.ACTIVE_TWO_BUTTONS;
    this.lenghtDataTable = 20;
  }

  public changePageTable(event: any) {
    this.changePage.emit( event.pageIndex );
  }

}
