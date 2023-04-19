import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// import { NgChartsModule } from 'ng2-charts';
// import { ChartModule } from 'angular2-chartjs';
// import 'chart.js-plugin-labels-dv';

import { FormsModule } from '@angular/forms';
import { ChartModule } from 'primeng/chart';
import 'chartjs-plugin-datalabels';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, ChartModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
