import { Component, OnInit } from '@angular/core';

/* Models */
import { HeaderModel } from 'src/app/data/models/local/InputsModels';

/* Constants & utils */
import { CLIENTS, BUTTONS, INPUTS } from 'src/app/portal/utilis/TextsConstantsES';
import { GeneralStructsService } from 'src/app/data/dto/general-structs.service';

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
  public dataToSend: HeaderModel;

  constructor( private dto: GeneralStructsService) { }

  ngOnInit(): void {
    this.dataToSend = this.dto.createStructHeader(
      this.textEs.TITLE,
      this.txtPlaceholder.SEARCH,
      this.txtButton.ADD_CLIENT,
      true,
      true,
      '');
  }

}
