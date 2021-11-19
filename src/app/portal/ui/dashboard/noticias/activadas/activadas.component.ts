import { Component, OnInit } from '@angular/core';

/* Impotación de servicios */
import { NewsApiService } from 'src/app/data/network/news/news-api.service';

@Component({
  selector: 'app-activadas',
  templateUrl: './activadas.component.html',
  styleUrls: ['./activadas.component.scss']
})
export class ActivadasComponent implements OnInit {

  constructor( private newsApi: NewsApiService ) { }

  ngOnInit(): void {
    this.getNewsList();
  }

  private getNewsList() {
    this.newsApi.getNewsListService().subscribe( (data: any) => {
      try {
        console.log('Noticias ', data);
      } catch (err) {}
    }, errorResponse => {});
  }

}
