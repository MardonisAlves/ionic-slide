import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePage implements OnInit{

  constructor() {}
  ngOnInit(): void {
   console.log('oi');
   
  }
}
