import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NavigationComponent } from './navigation.component';
import { AppRoutingModule } from '../app-routing.module';
import {MatButtonModule } from "@angular/material";
@NgModule({
  declarations: [
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule
  ],
  exports: [
      NavigationComponent
  ],
  providers: [],
  bootstrap: [NavigationComponent]
})
export class NavigationModule { }
