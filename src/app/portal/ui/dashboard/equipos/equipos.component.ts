import { Component, OnInit } from '@angular/core';

/* CONSTANTS & UTILITIES*/
import * as TextES from '../../../utils/textsConstantsES';
import { LIST_WORK_TEAMS, PLUS, SPACE } from 'src/app/portal/utils/constantsApp';

/* INTERFACES */
import { HeaderModel } from 'src/app/data/models/local/inputsModels';
import { DataTableModel, StructDataTableModel } from 'src/app/data/models/local/tableModels';

/* DIALOGS */
import { DialogAddTeamComponent } from 'src/app/portal/viewUtils/dialog/dialog-add-team/dialog-add-team.component';

/* SERVICES */
import { GeneralStructsService } from 'src/app/data/dto/general-structs.service';
import { WorkTeamService } from 'src/app/data/network/workTeam/work-team.service';

/* MOCKS */
import * as MockWorkTeam from '../../../../data/models/local/table-mocks';
import { WorkTeamListResponse } from 'src/app/data/models/response/workTeam/workTeam-response';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.scss']
})
export class EquiposComponent implements OnInit {

  //TEXTOS
  public txtEs = TextES.WORK_TEAM;
  private txtPlaceholder = TextES.INPUTS;
  private txtButton = TextES.BUTTONS;

  //TABLE
  public dataToSend: HeaderModel;
  public tableDataToSend: DataTableModel;
  private dataTableList: StructDataTableModel[];
  private dataTable:StructDataTableModel;
  public page = 0;
  public size = 5;
  public activeSpinner = true;

  constructor(private dto: GeneralStructsService, 
              private api: WorkTeamService) {
     
    this.dataTableList = [];
    this.validateWorkTeamData();
  }

  ngOnInit(): void {
    this.dataToSend =  this.dto.createHeaderStruct(
      this.txtEs.TITLE,
      this.txtPlaceholder.SEARCH,
      PLUS + SPACE + this.txtButton.ADD,
      true,
      true,
      DialogAddTeamComponent
    );
  }

  private getWorkTeamList(page: number, size: number, name: string){
   
      MockWorkTeam.WORK_TEAM.forEach( (item: WorkTeamListResponse) =>{
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
          this.txtEs.TABLE_HEADERS,
          this.dataTableList,
          false,
          true,
          false,
          parseInt("10", 10),
        );
      this.activeSpinner = false;
      localStorage.setItem(LIST_WORK_TEAMS, JSON.stringify(this.dataTableList));
  }

  public changePageTable(event: any){
    this.activeSpinner = true;
    this.page = event.pageIndex;
    this.size = event.pageSize;
    this.dataTableList = [];
    this.getWorkTeamList(this.page,this.size, '');
  }


  private validateWorkTeamData(){
    if(localStorage.getItem(LIST_WORK_TEAMS) === null){
      this.getWorkTeamList(this.page, this.size, '');
    }else{
      this.dataTableList = JSON.parse(localStorage.getItem(LIST_WORK_TEAMS));

      this.tableDataToSend = this.dto.createStructTable(
          this.txtEs.TABLE_HEADERS,
          this.dataTableList,
          false,
          true,
          false,
          parseInt("10", 10),
        );

      this.activeSpinner = false;
    }
    
  }

  public searchValue(event){
    // this.dataTableList =[];
    // MockWorkTeam.WORK_TEAM.forEach( (item: WorkTeamListResponse) =>{
    //   if(item.area.includes(event)){
    //     this.dataTable = {
    //     COLUMN_ONE: item.area,
    //     COLUMN_TWO: item.leader,
    //     COLUMN_THREE: item.collaborators,
    //     COLUMN_FOUR: item.activities,
    //     COLUMN_FIVE: this.txtButton.VIEW
    //   };
    //     this.dataTableList.push(this.dataTable);
    //   }
    // });
    // console.log(this.dataTableList);
    // localStorage.setItem(LIST_WORK_TEAMS, JSON.stringify(this.dataTableList));
  }
}
