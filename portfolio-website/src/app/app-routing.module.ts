import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {SplashComponent} from "./components/splash/splash.component";
import {AboutMeComponent} from "./components/about-me/about-me.component";
import {PortfolioComponent} from "./components/portfolio/portfolio.component";
import {ChrisSoterosComponent} from "./components/portfolio/chris-soteros/chris-soteros.component";
import {MiriComponent} from "./components/portfolio/miri/miri.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: 'home',
    component: SplashComponent
  },
  {
    path: 'portfolio',
    component: PortfolioComponent
  },
  {
    path: 'uni-prof-portfolio', //FIXME: Make children paths of portfolio
    component: ChrisSoterosComponent
  },
  {
    path: 'miri-game',
    component: MiriComponent
  },
  {
    path: 'about',
    component: AboutMeComponent
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{

}
