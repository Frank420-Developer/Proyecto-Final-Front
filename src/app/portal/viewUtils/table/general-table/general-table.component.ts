import { Component, OnInit, Input } from '@angular/core';

/* Models */
import { DataTableModel } from 'src/app/data/models/local/TableModels';

@Component({
  selector: 'app-general-table',
  templateUrl: './general-table.component.html',
  styleUrls: ['./general-table.component.scss']
})
export class GeneralTableComponent implements OnInit {
  @Input() dataReceived: DataTableModel;

  // List
  public headerList: [];
  public listTable: [];

  constructor() { }

  ngOnInit(): void {

    this.headerList = this.dataReceived.HEADER_TITLES;
    this.listTable = this.dataReceived.LIST_TABLE;

  }

}
