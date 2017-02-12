import { Hero } from './hero';
import { HEROES } from './mock-heros';
import {Injectable } from '@angular/core';

@Injectable()
export class HeroService{
      getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }
}

