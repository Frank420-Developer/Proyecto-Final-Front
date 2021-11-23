import { Component, OnInit } from '@angular/core';

/* Importacion de interfaces */
import { HeaderModel } from 'src/app/data/models/local/InputsModels';
import { DataTableModel, StructDataTableModel } from 'src/app/data/models/local/TableModels';
import { WorkTeamListResponse } from 'src/app/data/models/response/workTeam/WorkTeamResponse';

/* Importacion de utilidades, constantes y servicios */
import { WORK_TEAM, BUTTONS, INPUTS } from 'src/app/portal/utilis/TextsConstantsES';
import { PLUS, SPACE } from 'src/app/portal/utilis/ConstantsApp';

import { GeneralStructsService } from 'src/app/data/dto/general-structs.service';
import { WorkteamApiService } from 'src/app/data/network/workteam/workteam-api.service';

/* Importaciones de componentes */
import { DialogAddTeamComponent } from 'src/app/portal/viewUtils/dialog/dialog-add-team/dialog-add-team.component';

/* Mocks */
import * as MockWorkTeam from '../../../../data/models/local/TableMocks';
@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.scss']
})
export class EquiposComponent implements OnInit {

  // Text
  public textEs = WORK_TEAM;
  private txtPlaceholder = INPUTS;
  private txtButton = BUTTONS;

  // Inputs
  public dataToSend: HeaderModel;
  public tableDataToSend: DataTableModel;

  // Table
  private dataTableList: StructDataTableModel[];
  private dataTable: StructDataTableModel;

  constructor( private dto: GeneralStructsService,
               private api: WorkteamApiService ) {

    // Inicilizacion
    this.dataTableList = [];
    this.getWorkTeamList(0, 10);
  }

  ngOnInit(): void {
    this.dataToSend = this.dto.createStructHeader(
      this.textEs.TITLE,
      this.txtPlaceholder.SEARCH,
      PLUS + SPACE + this.txtButton.ADD,
      true,
      true,
      DialogAddTeamComponent
    );
  }

  private getWorkTeamList(page: number, size: number) {

    MockWorkTeam.WORK_TEAM.forEach( (item: WorkTeamListResponse) => {
      this.dataTable = {
        COLUMN_ONE: item.area,
        COLUMN_TWO: item.leader,
        COLUMN_THREE: item.collaborators,
        COLUMN_FOUR: item.activities,
        COLUMN_FIVE: this.txtButton.VIEW
      };

      this.dataTableList.push(this.dataTable);
    });

    this.tableDataToSend = this.dto.createStructTable(
      this.textEs.TABLE_HEADERS,
      this.dataTableList,
      false,
      true,
      false,
      parseInt('10', 10) );
  }

  public changePageTable(page: number) {
    this.getWorkTeamList(page, 10);
  }

}
