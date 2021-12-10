import { Component, OnInit } from '@angular/core';

/* HTTP */
import { HttpParams, HttpResponse } from '@angular/common/http';

/* MODELS */
import { HeaderModel } from 'src/app/data/models/local/inputsModels';
import { DataTableModel, StructDataTableModel } from 'src/app/data/models/local/tableModels';
import { Client } from 'src/app/data/models/response/clients/clients';

/* SERVICES */
import { ClientesService } from 'src/app/data/network/clients/clientes.service';

/* CONSTANTS & UTILS*/
import * as TextES from '../../../utils/textsConstantsES';
import { DIALOG_WIDTH_SM, PLUS, SPACE } from 'src/app/portal/utils/constantsApp';
import { GeneralStructsService } from 'src/app/data/dto/general-structs.service';
import { GeneralFunctionsService } from 'src/app/portal/utils/utilFunctions/general-functions.service';

/* DIALOG */
import { DialogAddClientComponent } from 'src/app/portal/viewUtils/dialog/dialog-add-client/dialog-add-client/dialog-add-client.component';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  //TEXTOS
  public txtEs = TextES.CLIENTES;
  public txtButtons = TextES.BUTTONS;
  public txtInput = TextES.INPUTS;

  //TABLE
  public dataToSend: HeaderModel;
  public tableDataToSend: DataTableModel;
  public dataTableList: StructDataTableModel[];
  private dataTable: StructDataTableModel;
  public activeSpinner = true;
  public page = 0;
  public size = 5;

  constructor( private dto: GeneralStructsService , private api: ClientesService) { 
    this.dataTableList= [];
    this.getClientsList(this.page, this.size, '');
  }

  ngOnInit(): void {
    this.dataToSend = this.dto.createHeaderStruct(
      this.txtEs.TITLE, 
      this.txtInput.SEARCH, 
      PLUS + SPACE + this.txtButtons.ADD_CLIENT, 
      true, 
      true, 
      DialogAddClientComponent,
      DIALOG_WIDTH_SM);
  }

  private getClientsList(page: number, size:number, name:string){
    const params = new HttpParams()
                      .set('page', page.toString())
                      .set('size', size.toString())
                      .set('name', name);
    
    this.api.getclientsList(params).subscribe( (data: HttpResponse<Client[]>) => {
      try {
        data.body.forEach( (item: Client) =>{
          this.dataTable = {
            COLUMN_ONE: item.name,
            COLUMN_TWO: item.description,
            COLUMN_THREE: item.id,
            COLUMN_FOUR: item.key,
            COLUMN_FIVE: this.txtButtons.VIEW
          }
          this.dataTableList.push(this.dataTable);
        });

        this.tableDataToSend = this.dto.createStructTable(
          this.txtEs.TABLE_HEADERS,
          this.dataTableList,
          false,
          true,
          false,
          parseInt(data.headers.get('total-elements'), 10)
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
    this.getClientsList(this.page,this.size, '');
  }

  public OnUpdateTable(update: boolean): void{
    if ( !update ){
      this.activeSpinner  = true;
      this.dataTableList = [];
      this.getClientsList(this.page, this.size, '');
    }
  }

  public searchValue(event: string){    

      this.dataTableList = [];
      this.getClientsList(this.page, this.size, event);
    
  }
}
