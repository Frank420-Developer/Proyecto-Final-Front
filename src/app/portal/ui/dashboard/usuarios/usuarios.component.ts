import { Component, OnInit } from '@angular/core';

/* Models */
import { HeaderModel } from 'src/app/data/models/local/InputsModels';

/* Constants & utils */
import { USERS, BUTTONS, INPUTS } from 'src/app/portal/utilis/TextsConstantsES';
import { GeneralStructsService } from 'src/app/data/dto/general-structs.service';
import { SPACE } from 'src/app/portal/utilis/ConstantsApp';

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
  public dataToSend: HeaderModel;

  constructor( private dto: GeneralStructsService ) { }

  ngOnInit(): void {
    this.dataToSend = this.dto.createStructHeader(
      this.textEs.TITLE,
      this.txtPlaceholder.SEARCH + SPACE + this.txtPlaceholder.SEARCH_USERS,
      this.txtButton.ADD_USER,
      true,
      true,
      '');
  }

}
