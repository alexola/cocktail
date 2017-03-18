import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { QuestionsComponent } from './questions/questions.component';
import { CocktailComponent } from './cocktail/cocktail.component';
import { FilterPipe } from './pipes/filter.pipe';
import { DisplayComponent } from './display/display.component';
import { RouterModule, Routes } from '@angular/router';
// maps
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from 'angular2-google-maps/core';
//
import { NavbarComponent } from './navbar/navbar.component';
import { MyAboutComponent } from './my-about/my-about.component';
import { SuggestComponent } from './suggest/suggest.component'
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: CocktailComponent },
  { path: 'display', component: DisplayComponent },
  { path: 'about', component: MyAboutComponent },
  { path: 'suggest', component: SuggestComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    CocktailComponent,
    FilterPipe,
    DisplayComponent,
    NavbarComponent,
    MyAboutComponent,
    SuggestComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCEep7m9TqNUY_Mfn8_BO89280Ev-7DC7I'
    }),
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
