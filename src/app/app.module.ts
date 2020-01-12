import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationModule } from './navigation/navigation.module';
import { AppRoutingModule } from './app-routing.module';
import { AboutMeComponent } from './about-me/about-me.component';
import { PlayingGamesComponent } from './playing-games/playing-games.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    PlayingGamesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    NavigationModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
