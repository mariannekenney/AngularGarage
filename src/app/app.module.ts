import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LatestComponent } from './latest/latest.component';
import { GarageComponent } from './garage/garage.component';
import { AddComponent } from './add/add.component';
import { GarageApi } from './garage/garage-api.service';

@NgModule({
  declarations: [
    AppComponent,
    LatestComponent,
    GarageComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [GarageApi],
  bootstrap: [AppComponent]
})

export class AppModule { }
