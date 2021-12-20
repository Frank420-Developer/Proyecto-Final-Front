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
  
  @HostListener('window:message', ['$event'])
  onMessage(event) {
    console.log("Algo------------------------------")
    debugger
    if (event.origin.includes('firmaautografa.com')) {
      if (event.data.event === "PROCESS_STARTED") {
        console.log('proceso iniciado');
      } else if (event.data.event === "PROCESS_ENDED") {
        console.log('proceso terminado');
      } else if (event.data.event === "SIGNATURE_COMPLETED") {
        console.log('proceso de firma completo');
      } else if (event.data.event === "RELOAD_PROCESS") {
        console.log('reinicia el proceso');
        window.location.reload();
      }
    } else {
      return;
    }
  }

  ngOnInit(): void {
    
    this.ticket = this.route.snapshot.paramMap.get('ticket');
    this.ruta = "https://uatwebfad4.firmaautografa.com/main?ticket="+this.ticket;
    console.log(this.ruta);
    
  }



  
}
