import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SplashComponent } from './components/splash/splash.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PortfolioDisplayComponent } from './components/portfolio-display/portfolio-display.component';
import { FooterComponent } from './components/footer/footer.component';
import { FeaturedWorkComponent } from './components/featured-work/featured-work.component';
import {PortfolioService} from "./services/portfolio.service";
import { GreetingComponent } from './components/greeting/greeting.component';

@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    NavbarComponent,
    PortfolioDisplayComponent,
    FooterComponent,
    FeaturedWorkComponent,
    GreetingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PortfolioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
