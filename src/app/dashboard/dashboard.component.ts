import { HeroService } from './../hero.service';
import { Hero } from './../hero';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard/dashboard.component.html',
  providers: [HeroService]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

	constructor(
	private router: Router,
	private heroService: HeroService) {
	}

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }

  gotoDetail(hero: Hero): void { 
		let link = ['/detail', hero.id];
		this.router.navigate(link);  
/* not implemented yet */}


 }