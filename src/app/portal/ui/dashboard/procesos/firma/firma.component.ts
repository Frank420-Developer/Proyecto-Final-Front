import { Component, HostListener, OnInit } from '@angular/core';


import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-firma',
  templateUrl: './firma.component.html',
  styleUrls: ['./firma.component.scss']
})
export class FirmaComponent implements OnInit {

  private ticket: string;
  public ruta: string;

  constructor( private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.ticket = this.route.snapshot.paramMap.get('ticket');
    this.ruta = "https://uatwebfad4.firmaautografa.com/main?ticket="+this.ticket;
    console.log(this.ruta);
    
  }



  
}
