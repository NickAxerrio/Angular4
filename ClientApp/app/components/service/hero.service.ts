import { Injectable } from '@angular/core';
import Herotype = require("../shared/hero.type");
import Hero = Herotype.Hero;
import Mockheroes = require("./mock-heroes");
import HEROES = Mockheroes.HEROES;

@Injectable()
export class HeroService {
    // Sync -> blocks ui when called use async with promises
    //getHeroes(): Hero[] {
    //    return Mockheroes.HEROES;
    //}

    getHero(id: number): Promise<Hero> {
        return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
    }

    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }

    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise(resolve => {
            // Simulate server latency with 2 second delay
            setTimeout(() => resolve(this.getHeroes()), 2000);
        });
    }
}