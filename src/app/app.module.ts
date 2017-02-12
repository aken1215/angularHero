import { HeroComponentComponent } from './hero-component/hero-component.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    HeroComponentComponent,
    HeroDetailComponent,
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }