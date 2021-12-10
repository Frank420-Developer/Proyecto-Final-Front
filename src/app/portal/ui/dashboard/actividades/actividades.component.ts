import { Component, OnInit } from '@angular/core';

/* HTTP */
import { HttpParams, HttpResponse } from '@angular/common/http';

/* MODELS */
import { HeaderModel } from 'src/app/data/models/local/inputsModels';
import { DataTableModel, StructDataTableModel } from 'src/app/data/models/local/tableModels';
import { ActivityListModel } from 'src/app/data/models/response/activities/activities';

/*  SERVICE */
import { ActivitiesService } from 'src/app/data/network/activities/activities.service';
import { GeneralStructsService } from 'src/app/data/dto/general-structs.service';

/* CONSTANTS */
import * as TextES from '../../../utils/textsConstantsES';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.scss']
})
export class ActividadesComponent implements OnInit {

  //TEXTOS
  public txtEs = TextES.ACTIVITIES;
  private txtPlaceholder = TextES.INPUTS;
  public txtButtons = TextES.BUTTONS;

  //INPUTS
  public dataToSend: HeaderModel;
  public tableDataToSend: DataTableModel;
  private dataTableList: StructDataTableModel[];
  private dataTable: StructDataTableModel;

  //TABLE
  public page = 0;
  public size = 5;
  public activeSpinner = true;

  constructor( private api: ActivitiesService, private dto: GeneralStructsService) { 
    this.dataTableList = [];
    this.getActivitiesList(this.page, this.size, '');
  }

  ngOnInit(): void {
    this.dataToSend = { 
      TITLE: this.txtEs.TITLE,
      TEXT_PLACEHOLDER: this.txtPlaceholder.SEARCH,
      TEXT_ADD_BUTTON: '',
      FLAG_ACTIVE_BUTTON: false,
      FLAG_ACTIVE_SEARCH: true,
      COMPONENT_DIALOG: '',
    }
  }

  private getActivitiesList(page: number, size: number, name: string){
    const params = new HttpParams()
                        .set('page', page.toString())
                        .set('size', size.toString())
                        .set('name', name);

    this.api.getActivitiesList(params).subscribe( (data: HttpResponse<ActivityListModel[]>) => {
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
          this.txtEs.TABLE_HEADERS,
          this.dataTableList,
          false,
          true,
          false,
          parseInt(data.headers.get('total-elements'),10)
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
    this.getActivitiesList(this.page,this.size, '');

  }
   public searchValue(event: string){    
      this.getActivitiesList(this.page, this.size, event);
    
  }
}
