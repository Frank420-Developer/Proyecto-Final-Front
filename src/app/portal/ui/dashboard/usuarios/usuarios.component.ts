import { Component, OnInit } from '@angular/core';

/* Importaciones de Http */
import { HttpParams } from '@angular/common/http';

/* Models */
import { HeaderModel } from 'src/app/data/models/local/InputsModels';
import { UserListResponse } from 'src/app/data/models/response/users/UsersResponse';
import { DataTableModel, StructDataTableModel } from 'src/app/data/models/local/TableModels';

/* Constants & utils */
import { USERS, BUTTONS, INPUTS, STATUS } from 'src/app/portal/utilis/TextsConstantsES';
import { SPACE } from 'src/app/portal/utilis/ConstantsApp';
import { GeneralStructsService } from 'src/app/data/dto/general-structs.service';
import { GeneralFunctionsService } from 'src/app/portal/utilis/utilFunctions/general-functions.service';

/* Importaciones de servicios */
import { UsersApiService } from 'src/app/data/network/users/users-api.service';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  // Text
  public textEs = USERS;
  private txtPlaceholder = INPUTS;
  private txtButton = BUTTONS;
  private txtStatus = STATUS;

  // Inputs
  public dataToSend: HeaderModel;
  public tableDataToSend: DataTableModel;

  // Table
  private dataTableList: StructDataTableModel[];
  private dataTable: StructDataTableModel;

  constructor( private dto: GeneralStructsService,
               private api: UsersApiService,
               private utils: GeneralFunctionsService ) {

    // Inicialización
    this.dataTableList = [];
    this.getUserList(0, 10);
  }

  ngOnInit(): void {
    this.dataToSend = this.dto.createStructHeader(
      this.textEs.TITLE,
      this.txtPlaceholder.SEARCH + SPACE + this.txtPlaceholder.SEARCH_USERS,
      this.txtButton.ADD_USER,
      true,
      true,
      '');
  }

  private getUserList(page: number, size: number) {
    const params = new HttpParams()
                   .set('page', page.toString())
                   .set('size', size.toString());

    this.api.getUserListApi(params).subscribe( (data: UserListResponse[]) => {
      try {
        data.forEach( (item: UserListResponse) => {
          this.dataTable = {
            COLUMN_ONE: item.name,
            COLUMN_TWO: item.email,
            COLUMN_THREE: this.utils.getFormatDate(item.creationDate),
            COLUMN_FOUR: this.txtButton.VIEW,
            COLUMN_FIVE: (item.enabled) ? this.txtStatus.ACTIVE : this.txtStatus.INACTIVE,
            COLUMN_SIX: this.txtButton.DELETE_INACTIVE
          };

          this.dataTableList.push(this.dataTable);
        });

        this.tableDataToSend = this.dto.createStructTable(
          this.textEs.TABLE_HEADERS,
          this.dataTableList,
          false,
          true,
          false,
          parseInt('10', 10 ),
          true
        );

      } catch (err) {
      }
    }, errorResponse => {});

  }


  public changePageTable(event: any) {
    this.getUserList(event, 10);
  }

}
