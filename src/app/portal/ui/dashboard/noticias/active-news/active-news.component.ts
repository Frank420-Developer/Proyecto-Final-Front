import { HttpParams, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

/* IMPORTACION DE MODELOS */
import { DataTableModel } from 'src/app/data/models/local/tableModels';
import { ListNewsResponse, NewsDetailResponse } from 'src/app/data/models/response/news/news';

/* SERVICES */
import { NewsService } from 'src/app/data/network/news/news.service';

/* CONSTANTS */
import { NEWS } from 'src/app/portal/utils/textsConstantsES';
import { SPACE } from 'src/app/portal/utils/constantsApp';

@Component({
  selector: 'app-active-news',
  templateUrl: './active-news.component.html',
  styleUrls: ['./active-news.component.scss']
})
export class ActiveNewsComponent implements OnInit {

  //LIST
  private newsList: ListNewsResponse[];
  public dataToSend: DataTableModel;

  //TEXTOS
  public txtEs = NEWS;

  public page = 0;
  public size = 5
  public activeSpinner = true;

  constructor( private newsService: NewsService ) {
    this.getNewsList(this.page,this.size, '');
  }

  ngOnInit(): void {
    
  }

  private getNewsList(pageNumber: number, pageSize: number, name: string){
    const params = new HttpParams()
                    .set('page', pageNumber.toString())
                    .set('size', pageSize.toString())
                    .set('headline', name);
    this.newsService.getNewsList(params).subscribe( (data: HttpResponse<ListNewsResponse[]>) => {
      try {
      
        this.newsList = data.body;
        
         this.newsList.forEach(
          (item: ListNewsResponse, position: number) => {
           
            this.getNewsDetail( item.id, position );
            
        });
        this.dataToSend = {
            HEADER_TITLES: NEWS.TABLE_HEADERS,
            CONTENT_LIST_TABLE: this.newsList,
            ACTIVE_IMAGE: true,
            ACTIVE_BUTTON: false,
            ACTIVE_TWO_BUTTONS: true,
            TABLE_LENGTH: parseInt(data.headers.get('total-elements'), 10),
          }
          this.activeSpinner = false;
      } catch (error) {
        this.activeSpinner = false;
      }
    });
  }

  private getNewsDetail(id: string, pos: number ) {
    this.newsService.getNewsDetailService(id).subscribe( (data: NewsDetailResponse) => {
      try {
        this.newsList[pos].author = data.idAuthor.name + SPACE + data.idAuthor.lastName;
      } catch (err) {}
    }, errorResponse => {});
  }

  public changePageTable(event: any){
    this.activeSpinner = true;
    this.page = event.pageIndex;
    this.size = event.pageSize;
    this.newsList = [];
    this.getNewsList(this.page, this.size, '');
  }

  public searchValue(event: string){
    this.getNewsList(this.page, this.size, event);
  }
}
