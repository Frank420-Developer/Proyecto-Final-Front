import { Component, HostListener, OnInit } from '@angular/core';


import { ActivatedRoute, Router } from '@angular/router';
import { UserInfoModel } from 'src/app/data/models/response/login/login';
import { USER_INFO } from 'src/app/portal/utils/constantsApp';
import { LOGO_NAAT_TECH } from 'src/app/portal/utils/imagesRoutes';

@Component({
  selector: 'app-firma',
  templateUrl: './firma.component.html',
  styleUrls: ['./firma.component.scss']
})
export class FirmaComponent implements OnInit {

  private ticket: string;
  public ruta: string;


  public logoNaatTech = LOGO_NAAT_TECH;

  public userInfo: UserInfoModel;
  public imgUser: string;
  public username: string;


  constructor( private route: ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    
    this.ticket = this.route.snapshot.paramMap.get('ticket');
    this.ruta = "https://uatwebfad4.firmaautografa.com/main?ticket="+this.ticket;
    console.log(this.ruta);

    this.userInfo = JSON.parse(localStorage.getItem(USER_INFO));
    this.imgUser = this.userInfo.photo;
    this.username = this.userInfo.name;
    
  }


public back(){  
    this.router.navigate(['../../dashboard']);
  }
  
}
