import { Component, OnInit } from '@angular/core';

/* HTTP */
import { HttpParams, HttpResponse } from '@angular/common/http';

/* MODELS */
import { HeaderModel } from 'src/app/data/models/local/inputsModels';
import { DataTableModel, StructDataTableModel } from 'src/app/data/models/local/tableModels';
import { UsersListResponse } from 'src/app/data/models/response/users/users';

/* CONSTANTS & UTILS*/
import * as TextES from '../../../utils/textsConstantsES';
import { PLUS, SPACE } from 'src/app/portal/utils/constantsApp';
import { GeneralStructsService } from 'src/app/data/dto/general-structs.service';
import { GeneralFunctionsService } from 'src/app/portal/utils/utilFunctions/general-functions.service';

/* SERVICES */
import { UsersService } from 'src/app/data/network/users/users.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

    //TEXTOS
  public txtEs = TextES.USERS;
  public txtButtons = TextES.BUTTONS;
  public txtInput = TextES.INPUTS;
  public txtStatus = TextES.STATUS;

  //INPUTS
  public dataToSend: HeaderModel;
  public tableDataToSend: DataTableModel;
  private dataTableList: StructDataTableModel[];
  private dataTable: StructDataTableModel;

   //TABLE
  public page = 0;
  public size = 5;
  public activeSpinner = true;

  constructor(  private dto: GeneralStructsService,
                private api: UsersService,
                private utilities: GeneralFunctionsService ) { 
    this.dataTableList = [];
    this.getUsersList(this.page, this.size);
  }

  ngOnInit(): void {
    this.dataToSend = this.dto.createHeaderStruct(this.txtEs.TITLE, this.txtInput.SEARCH + SPACE + this.txtInput.USERS, PLUS + SPACE + this.txtButtons.ADD_USER, true, true, SPACE);
  }

  private getUsersList(page: number, size: number){
    const params = new HttpParams()
                    .set('page', page.toString())
                    .set('size', size.toString());
    this.api.getUsersList(params).subscribe( (data: HttpResponse<UsersListResponse[]>) => {
      try {
        
        const lista = data.body;
        lista.forEach( (item: UsersListResponse) => {
          this.dataTable = {
            COLUMN_ONE: item.name,
            COLUMN_TWO: item.email,
            COLUMN_THREE: this.utilities.getFormatDate(item.creationDate),
            COLUMN_FOUR: this.txtButtons.VIEW,
            COLUMN_FIVE: ( item.enabled ) ? this.txtStatus.ACTIVE : this.txtStatus.INACTIVE,
            COLUMN_SIX: this.txtButtons.DELETE_INACTIVE
          };
          this.dataTableList.push(this.dataTable);
        });
        
        this.tableDataToSend = this.dto.createStructTable(
          this.txtEs.TABLE_HEADERS,
          this.dataTableList,
          false,
          true,
          true,
          parseInt(data.headers.get('total-elements'),10),
          true
        );

        this.activeSpinner = false;
      } catch (error) {
       this.activeSpinner = false; 
      }
    });
  }

  public changePageTable(event: any){
    this.activeSpinner = true;
    this.page = event.pageIndex;
    this.size = event.pageSize;
    this.dataTableList = [];
    this.getUsersList(this.page,this.size);

  }

}
