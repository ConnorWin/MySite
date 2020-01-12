import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { PlayingGamesComponent } from './playing-games/playing-games.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'aboutme', component: AboutMeComponent },
  { path: 'playinggames', component: PlayingGamesComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }