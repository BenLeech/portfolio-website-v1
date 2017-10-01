import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { SplashComponent } from './components/splash/splash.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PortfolioDisplayComponent } from './components/portfolio-display/portfolio-display.component';
import { FooterComponent } from './components/footer/footer.component';
import { FeaturedWorkComponent } from './components/featured-work/featured-work.component';
import {PortfolioService} from "./services/portfolio.service";
import { GreetingComponent } from './components/greeting/greeting.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import {AppRoutingModule} from "./app-routing.module";
import {NavigationService} from "./services/navigation.service";

@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    NavbarComponent,
    PortfolioDisplayComponent,
    FooterComponent,
    FeaturedWorkComponent,
    GreetingComponent,
    AboutMeComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule
  ],
  providers: [PortfolioService, NavigationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
