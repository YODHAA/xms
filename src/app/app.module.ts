import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ChartModule} from 'angular2-highcharts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

declare var  require:any;
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ChartModule.forRoot(require('highcharts')),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);