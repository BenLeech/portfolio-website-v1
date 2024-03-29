import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FeaturedWorkComponent } from './components/home/featured-work/featured-work.component';
import {PortfolioService} from "./services/portfolio.service";
import { AboutMeComponent } from './components/about-me/about-me.component';
import {AppRoutingModule} from "./app-routing.module";
import {NavigationService} from "./services/navigation.service";
import { SkillBarComponent } from './components/common/skill-bar/skill-bar.component';
import { WhenInViewDirective } from './directives/when-in-view.directive';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ChrisSoterosComponent } from './components/portfolio/chris-soteros/chris-soteros.component';
import { MiriComponent } from './components/portfolio/miri/miri.component';
import {TobiiEyeXComponent} from "./components/portfolio/tobii-eyex/tobii-eyex.component";
import {FadeToTopDirective} from "./directives/fade-to-top.directive";
import {ParallaxDirective} from "./directives/parallax.directive";
import {PortfolioDisplay2Component} from "./components/common/portfolio-display/portfolio-display.component";
import {ReactiveDevDayComponent} from "./components/portfolio/reactive-dev-day/reactive-dev-day.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PortfolioDisplay2Component,
    FooterComponent,
    FeaturedWorkComponent,
    AboutMeComponent,
    SkillBarComponent,
    WhenInViewDirective,
    FadeToTopDirective,
    ParallaxDirective,
    PortfolioComponent,
    ChrisSoterosComponent,
    MiriComponent,
    TobiiEyeXComponent,
    ReactiveDevDayComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, BrowserAnimationsModule, RouterModule
  ],
  providers: [PortfolioService, NavigationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
