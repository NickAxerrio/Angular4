"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var app_component_1 = require("./components/app/app.component");
var navmenu_component_1 = require("./components/navmenu/navmenu.component");
var home_component_1 = require("./components/home/home.component");
var hero_component_1 = require("./components/hero/hero.component");
var hero_detail_component_1 = require("./components/hero/hero-detail.component");
var hero_navigator_component_1 = require("./components/hero/hero-navigator.component");
var angular_oauth2_oidc_1 = require("angular-oauth2-oidc");
exports.sharedConfig = {
    bootstrap: [app_component_1.AppComponent],
    declarations: [
        app_component_1.AppComponent,
        navmenu_component_1.NavMenuComponent,
        home_component_1.HomeComponent,
        hero_detail_component_1.HeroDetailComponent,
        hero_component_1.HeroComponent,
        hero_navigator_component_1.HeroNavigator
    ],
    imports: [
        angular_oauth2_oidc_1.OAuthModule.forRoot(),
        router_1.RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: home_component_1.HomeComponent },
            { path: 'hero', component: hero_component_1.HeroComponent },
            { path: 'hero/detail/:id', component: hero_detail_component_1.HeroDetailComponent },
            { path: 'heroNav', component: hero_navigator_component_1.HeroNavigator },
            //{ path: 'menu', component: MenuComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
};
//# sourceMappingURL=app.module.shared.js.map