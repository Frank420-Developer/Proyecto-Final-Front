import { Component, OnInit } from '@angular/core';

/* Models */
import { HeaderModel } from 'src/app/data/models/local/InputsModels';

/* Constants & utils */
import { NEWS } from 'src/app/portal/utilis/TextsConstantsES';
import { SPACE } from 'src/app/portal/utilis/ConstantsApp';
import { GeneralStructsService } from 'src/app/data/dto/general-structs.service';

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
    this.dataToSend = this.dto.createStructHeader(this.textEs.TITLE, SPACE, SPACE, false, false, '');
  }

}
