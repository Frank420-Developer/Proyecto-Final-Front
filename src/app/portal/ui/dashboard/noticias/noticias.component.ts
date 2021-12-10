import { Component, EventEmitter, OnInit, Output } from '@angular/core';

/* MODELS */
import { HeaderModel } from 'src/app/data/models/local/inputsModels';

/* CONSTANTS & UTILS*/
import * as TextES from '../../../utils/textsConstantsES';
import { PLUS, SPACE } from 'src/app/portal/utils/constantsApp';
import { GeneralStructsService } from 'src/app/data/dto/general-structs.service';
import { DialogAddNewsComponent } from 'src/app/portal/viewUtils/dialog/dialog-add-news/dialog-add-news/dialog-add-news.component';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {

  //TEXTOS
  public txtEs = TextES.NEWS;
  public txtTabs = TextES.NEWS.TABS;
  public txtButtons = TextES.BUTTONS
  public txtInputs = TextES.INPUTS

  public dataToSend: HeaderModel;

  constructor( private dto: GeneralStructsService) { }

  ngOnInit(): void {
     this.dataToSend = this.dto.createHeaderStruct(this.txtEs.TITLE, this.txtInputs.SEARCH + SPACE+ this.txtInputs.NEWS, PLUS + SPACE + this.txtButtons.ADD_NOTICE, true, true, DialogAddNewsComponent);
  }

  public searchValueEnter(event: string){
    console.log(event);
  }
}
