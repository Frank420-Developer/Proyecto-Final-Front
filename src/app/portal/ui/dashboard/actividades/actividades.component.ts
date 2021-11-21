import { Component, OnInit } from '@angular/core';

/* importaciones de http */
import { HttpParams } from '@angular/common/http';

/* Models */
import { HeaderModel } from 'src/app/data/models/local/InputsModels';
import { ActivityListModel } from 'src/app/data/models/response/activities/ActivityResponse';

/* Services */
import { ActivitiesApiService } from 'src/app/data/network/activities/activities-api.service';

/* Constants and utilities */
import { ACTIVITIES, INPUTS } from 'src/app/portal/utilis/TextsConstantsES';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.scss']
})
export class ActividadesComponent implements OnInit {

  // Text
  public textEs = ACTIVITIES;
  private txtPlaceholder = INPUTS;
  public dataToSend: HeaderModel;

  constructor( private api: ActivitiesApiService ) {
    this.getActivitiesList(0, 10);
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

    this.api.getActivitiesListService(params).subscribe( (data: ActivityListModel[]) => {
      try {
        //
      } catch (err) {}
    }, errorResponse => {});
  }

}
