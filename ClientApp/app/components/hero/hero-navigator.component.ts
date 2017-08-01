import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Herotype = require("../shared/hero.type");
import Hero = Herotype.Hero;
import Heroservice = require("../service/hero.service");
import HeroService = Heroservice.HeroService;

@Component({
    selector: 'HeroNavigator',
    templateUrl: './hero-navigator.component.html',
    styleUrls: ['hero-navigator.component.css'],
    providers: [HeroService]
})



export class HeroNavigator implements OnInit {

    // Variables
    heroes: Hero[];
    selectedHero: Hero;

    // Constructor
    constructor(private heroService: HeroService, private router: Router)
    {}

    // Methods
    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    gotoDetail(): void {
       this.router.navigate(['/hero/detail', this.selectedHero.id]);
    }

    getHeroes(): void {
        //this.heroes = this.heroService.getHeroes(); -> sync blocks ui, use .then for async
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    // Lifecycle Methods
    ngOnInit(): void {
        this.getHeroes();
    }
}





