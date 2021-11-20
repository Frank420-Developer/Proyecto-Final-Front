import { Component, OnInit } from '@angular/core';

/* Impotación de servicios */
import { NewsApiService } from 'src/app/data/network/news/news-api.service';

/* Importacion de modelos */
import { DataTableModel } from 'src/app/data/models/local/TableModels';

/* Importación de constantes */
import * as TextES from '../../../../utilis/TextsConstantsES';
import { ListNewsResponse } from 'src/app/data/models/response/news/NewsResponse';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-activadas',
  templateUrl: './activadas.component.html',
  styleUrls: ['./activadas.component.scss']
})
export class ActivadasComponent implements OnInit {

  // Data from table
  public dataToSend: DataTableModel;

  // Texts
  public textsES = TextES.NEWS;

  constructor( private newsApi: NewsApiService ) {
    this.getNewsList(0, 10);
  }

  ngOnInit(): void {
  }

  private getNewsList( pageNumber: number, pageSize: number ) {
    const params = new HttpParams()
                    .set('page', pageNumber.toString())
                    .set('size', pageSize.toString());

    this.newsApi.getNewsListService({params}).subscribe( (data) => {
      try {
        console.log('Noticias ', data);

        this.dataToSend = {
          HEADER_TITLES: this.textsES.TABLE_HEADERS,
          LIST_TABLE: data,
          ACTIVE_IMAGE: true,
          ACTIVE_BUTTON: false,
          ACTIVE_TWO_BUTTONS: true
        };
      } catch (err) {}
    }, errorResponse => {});
  }

  public changePageTable(event: any) {
    this.getNewsList(event, 0);
  }

}
