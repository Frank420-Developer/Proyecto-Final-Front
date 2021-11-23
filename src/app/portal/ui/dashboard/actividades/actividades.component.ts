import { Component, OnInit } from '@angular/core';

/* importaciones de http */
import { HttpParams, HttpResponse } from '@angular/common/http';

/* Models */
import { HeaderModel } from 'src/app/data/models/local/InputsModels';
import { ActivityListModel } from 'src/app/data/models/response/activities/ActivityResponse';
import { DataTableModel, StructDataTableModel } from 'src/app/data/models/local/TableModels';

/* Services */
import { ActivitiesApiService } from 'src/app/data/network/activities/activities-api.service';

/* Constants and utilities */
import { ACTIVITIES, BUTTONS, INPUTS } from 'src/app/portal/utilis/TextsConstantsES';
import { GeneralStructsService } from 'src/app/data/dto/general-structs.service';
import { GeneralFunctionsService } from 'src/app/portal/utilis/utilFunctions/general-functions.service';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.scss']
})
export class ActividadesComponent implements OnInit {

  // Text
  public textEs = ACTIVITIES;
  private txtPlaceholder = INPUTS;
  private txtButtons = BUTTONS;

  // Inputs
  public dataToSend: HeaderModel;
  public tableDataToSend: DataTableModel;
  private dataTableList: StructDataTableModel[];
  private dataTable: StructDataTableModel;

  constructor( private api: ActivitiesApiService,
               private dto: GeneralStructsService,
               private utilities: GeneralFunctionsService, ) {
    this.getActivitiesList(0, 10);
    this.dataTableList = [];
  }

  ngOnInit(): void {
    this.dataToSend = {
      TITLE: this.textEs.TITLE,
      TEXT_PLACEHOLDER: this.txtPlaceholder.SEARCH,
      TEXT_ADD_BUTTON: '',
      FLAG_ACTIVE_SEARCH: true,
      FLAG_ACTIVE_BUTTON: false,
      COMPONENT_DIALOG: ''
    };
  }


  private getActivitiesList(page: number, size: number) {
    const params = new HttpParams()
                    .set('page', page.toString())
                    .set('size', size.toString());

    this.api.getActivitiesListService(params).subscribe(
      (data: HttpResponse<ActivityListModel[]>) => {
      try {
        const lista = data.body;

        lista.forEach( (item: ActivityListModel) => {
          this.dataTable = {
            COLUMN_ONE: item.description,
            COLUMN_TWO: item.name,
            COLUMN_THREE: item.id,
            COLUMN_FOUR: item.key,
            COLUMN_FIVE: this.txtButtons.VIEW
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

      } catch (err) {
        this.utilities.onAlertMessage('Error ' + err, '');
      }
    }, errorResponse => {
      this.utilities.onAlertMessage('Error ' + errorResponse, '');
    });
  }


  public changePageTable(event: any) {
    this.getActivitiesList(event, 10);
  }

}
