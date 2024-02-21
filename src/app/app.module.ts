import { AppComponent } from './app.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import {  IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FingerprintAIO } from '@awesome-cordova-plugins/fingerprint-aio/ngx';


@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule,
    RouterModule.forRoot([]),
    IonicModule.forRoot(),
    FormsModule
  ],
  providers:[FingerprintAIO],
  bootstrap:[AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
 
})
export class AppModule { }
