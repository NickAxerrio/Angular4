import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { HeroComponent } from './components/hero/hero.component';
import { UserComponent } from './components/user/user.component';
import { HeroDetailComponent } from './components/hero/hero-detail.component';
import { HeroNavigator } from './components/hero/hero-navigator.component';

export const sharedConfig: NgModule = {
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        HeroDetailComponent,
        HeroComponent,
        UserComponent,
        HeroNavigator
    ],
    imports: [
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'hero', component: HeroComponent },
            { path: 'hero/detail/:id', component: HeroDetailComponent },
            { path: 'heroNav', component: HeroNavigator },
            { path: 'user', component: UserComponent },
            //{ path: 'menu', component: MenuComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
};
