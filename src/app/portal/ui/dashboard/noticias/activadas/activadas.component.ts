import { Component, OnInit } from '@angular/core';

/* importaciones de http */
import { HttpParams } from '@angular/common/http';

/* Impotación de servicios */
import { NewsApiService } from 'src/app/data/network/news/news-api.service';

/* Importacion de modelos */
import { DataTableModel } from 'src/app/data/models/local/TableModels';
import { ListNewsResponse, NewsDetailResponse } from 'src/app/data/models/response/news/NewsResponse';

/* Importación de constantes */
import * as TextES from '../../../../utilis/TextsConstantsES';
import { SPACE } from 'src/app/portal/utilis/ConstantsApp';

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

  // List
  private newsList: ListNewsResponse[];

  // Flags
  public activeSpinner = true;

  constructor( private newsApi: NewsApiService ) {
    this.getNewsList(0, 10);
  }

  ngOnInit(): void { }

  private getNewsList( pageNumber: number, pageSize: number ) {
    const params = new HttpParams()
                    .set('page', pageNumber.toString())
                    .set('size', pageSize.toString());

    this.newsApi.getNewsListService(params).subscribe( (data: ListNewsResponse[]) => {
      try {
        this.newsList = data;

        this.newsList.forEach(
          (item: ListNewsResponse, position: number, list: ListNewsResponse[]) => {
            this.getNewsDetail( item.id, position );
        });

        this.dataToSend = {
          HEADER_TITLES: this.textsES.TABLE_HEADERS,
          LIST_TABLE: this.newsList,
          ACTIVE_IMAGE: true,
          ACTIVE_BUTTON: false,
          ACTIVE_TWO_BUTTONS: true
        };

        this.activeSpinner = false;
      } catch (err) {
        this.activeSpinner = false;
      }
    }, errorResponse => {
      this.activeSpinner = false;
    });
  }


  private getNewsDetail(id: string, pos: number ) {
    this.newsApi.getNewsDetailService(id).subscribe( (data: NewsDetailResponse) => {
      try {
        this.newsList[pos].author = data.idAuthor.name + SPACE + data.idAuthor.lastName;
      } catch (err) {}
    }, errorResponse => {});
  }


  public changePageTable(event: any) {
    this.getNewsList(event, 0);
  }

}
