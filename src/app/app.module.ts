import { DashboardComponent } from './dashboard/dashboard.component';
import { routing } from './heroes/heroes.routing';
import { HeroesComponent  } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { AppComponent }  from './app.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
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