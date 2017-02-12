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


      add(name: string): void {
        name = name.trim();
        if (!name) { return; }
        this.heroService.create(name)
          .then(hero => {
            this.heroes.push(hero);
            this.selectedHero = null;
          });
      }

      delete(hero: Hero): void {
        this.heroService
            .delete(hero.id)
            .then(() => {
              this.heroes = this.heroes.filter(h => h !== hero);
              if (this.selectedHero === hero) { this.selectedHero = null; }
            });
      }

}