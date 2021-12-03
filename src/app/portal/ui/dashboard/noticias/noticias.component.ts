import { Component, OnInit } from '@angular/core';

/* Models */
import { HeaderModel } from 'src/app/data/models/local/InputsModels';

/* Constants & utils */
import { NEWS, BUTTONS, INPUTS } from 'src/app/portal/utilis/TextsConstantsES';
import { PLUS, SPACE } from 'src/app/portal/utilis/ConstantsApp';
import { GeneralStructsService } from 'src/app/data/dto/general-structs.service';
import { DialogAddNewsComponent } from 'src/app/portal/viewUtils/dialog/dialog-add-news/dialog-add-news.component';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {

  // Text
  public textEs = NEWS;
  public dataToSend: HeaderModel;

  constructor( private dto: GeneralStructsService ) { }

  ngOnInit(): void {
    this.dataToSend = this.dto.createStructHeader(
      this.textEs.TITLE,
      INPUTS.SEARCH + SPACE + INPUTS.SEARCH_NEWS,
      PLUS + SPACE + BUTTONS.ADD_NEWS,
      true,
      true,
      DialogAddNewsComponent
      );
  }

}
