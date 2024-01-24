import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
 import { CardComponent } from './card/card.component';
 import { DataServiceService } from './data-service.service';

@NgModule({
  declarations: [
    AppComponent,
   CardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
