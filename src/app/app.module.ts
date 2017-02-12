import { DashboardComponent } from './dashboard/dashboard.component';
import { routing } from './heroes/heroes.routing';
import { HeroesComponent  } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  declarations: [
    HeroesComponent ,
    HeroDetailComponent,
    DashboardComponent,
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }