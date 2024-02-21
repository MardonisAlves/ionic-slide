import { Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { FirePrint } from './services/fire-print';
register();
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})

export class AppComponent implements OnInit {
  
  constructor(private firePrint: FirePrint) {}
  ngOnInit(): void {
   this.firePrint.checkFirePrint()
  }
}
