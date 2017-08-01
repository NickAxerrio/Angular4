import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import Herotype = require("../shared/hero.type");
import Hero = Herotype.Hero;
import Heroservice = require("../service/hero.service");
import HeroService = Heroservice.HeroService;

@Component({
    selector: 'my-heroes',
    templateUrl: './hero.component.html',
    styleUrls: ['hero.component.css'],
    providers: [HeroService]
})



export class HeroComponent implements OnInit{

    // Variables
    title = 'Tour of Heroes';
    hero: Hero = {
        id: 1,
        name: 'Windstorm',
        extra: 'derp'
    };
    heroes: Hero[];
    selectedHero: Hero;

    // Constructor

    //heroservice: HeroService;
    //constructor(heroService: HeroService) {
    //    this.heroservice = heroService
    //}
    constructor(private heroService: HeroService) {
        //this.getHeroes(); -> use lifecycle method
    }

    // Methods


    // Lifecycle Methods
    ngOnInit(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1, 5));
    }
}





