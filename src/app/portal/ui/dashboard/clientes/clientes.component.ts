import { Component, OnInit } from '@angular/core';

/* importaciones de http */
import { HttpParams, HttpResponse } from '@angular/common/http';

/* Models */
import { HeaderModel } from 'src/app/data/models/local/InputsModels';
import { DataTableModel, StructDataTableModel } from 'src/app/data/models/local/TableModels';
import { Client } from 'src/app/data/models/response/clients/ClientsResponse';

/* Service */
import { ClientesApiService } from 'src/app/data/network/clientes/clientes-api.service';

/* Constants & utils */
import { CLIENTS, BUTTONS, INPUTS } from 'src/app/portal/utilis/TextsConstantsES';
import { GeneralStructsService } from 'src/app/data/dto/general-structs.service';
import { GeneralFunctionsService } from 'src/app/portal/utilis/utilFunctions/general-functions.service';
import { DialogAddClientComponent } from 'src/app/portal/viewUtils/dialog/dialog-add-client/dialog-add-client.component';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  // Text
  public textEs = CLIENTS;
  private txtPlaceholder = INPUTS;
  private txtButton = BUTTONS;

  // Flags
  public activeSpinner = true;

  // Table
  public dataToSend: HeaderModel;
  public tableDataToSend: DataTableModel;
  private dataTableList: StructDataTableModel[];
  private dataTable: StructDataTableModel;

  constructor( private dto: GeneralStructsService,
               private api: ClientesApiService,
               private utilities: GeneralFunctionsService, ) {
    //
    this.getClientList(0, 10);
    this.dataTableList = [];
  }

  ngOnInit(): void {
    this.dataToSend = this.dto.createStructHeader(
      this.textEs.TITLE,
      this.txtPlaceholder.SEARCH,
      this.txtButton.ADD_CLIENT,
      true,
      true,
      DialogAddClientComponent);
  }


  private getClientList(page: number, size: number) {
    const params = new HttpParams()
                    .set('page', page.toString())
                    .set('size', size.toString());

    this.api.getClientsListApi(params).subscribe( (data: HttpResponse<Client[]>) => {
      try {

        data.body.forEach( (item: Client) => {
          this.dataTable = {
            COLUMN_ONE: item.description,
            COLUMN_TWO: item.name,
            COLUMN_THREE: item.id,
            COLUMN_FOUR: item.key,
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
          parseInt(data.headers.get('total-elements'), 10)
        );

        this.activeSpinner = false;

      } catch (err) {
        this.activeSpinner = false;
      }
    }, errorResponse => {
      this.activeSpinner = false;
    });
  }


  public changePageTable(event: any) {
    this.getClientList(event, 10);
  }

}
