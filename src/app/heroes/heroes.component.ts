import { Router } from '@angular/router';
import {Hero} from '../hero';
import { HEROES } from './../mock-heros';
import { HeroService } from './../hero.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-heroes',
  templateUrl: 'app/heroes/heroes.component.html',
  styleUrls:  ['app/heroes/heroes.component.css'] ,
  providers: [HeroService]
})

export class HeroesComponent  implements OnInit {

    heroes = HEROES;

    selectedHero: Hero;

    constructor(  private router: Router,private heroService: HeroService) { }

    onSelect(hero: Hero): void {
    this.selectedHero = hero;
    }
  
    ngOnInit():void{
      this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

      gotoDetail(): void {
      this.router.navigate(['/detail', this.selectedHero.id]);
    }
}