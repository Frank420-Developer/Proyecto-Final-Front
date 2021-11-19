import { Component, OnInit } from '@angular/core';

/* Importacion de constantes */
import * as TextsES from '../../../utilis/TextsConstantsES';

/* Importacion de interfaces */
import { HeaderModel } from 'src/app/data/models/local/InputsModels';
import { PLUS, SPACE } from 'src/app/portal/utilis/ConstantsApp';
import { DialogAddTeamComponent } from 'src/app/portal/viewUtils/dialog/dialog-add-team/dialog-add-team.component';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.scss']
})
export class EquiposComponent implements OnInit {

  // Text
  public textEs = TextsES.WORK_TEAM;
  private txtPlaceholder = TextsES.INPUTS;
  private txtButton = TextsES.BUTTONS;
  public dataToSend: HeaderModel;

  constructor() { }

  ngOnInit(): void {
    this.dataToSend = {
      TITLE: this.textEs.TITLE,
      TEXT_PLACEHOLDER: this.txtPlaceholder.SEARCH,
      TEXT_ADD_BUTTON: PLUS + SPACE + this.txtButton.ADD,
      FLAG_ACTIVE_SEARCH: true,
      FLAG_ACTIVE_BUTTON: true,
      COMPONENT_DIALOG: DialogAddTeamComponent
    };
  }

}
