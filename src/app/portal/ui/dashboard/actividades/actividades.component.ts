import { Component, OnInit } from '@angular/core';
import { HeaderModel } from 'src/app/data/models/local/InputsModels';
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

  constructor() { }

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

}
