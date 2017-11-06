import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {NavLink} from "../model/Nav-Link";
import {Router, NavigationEnd} from "@angular/router";

@Injectable()
export class NavigationService {

  private scrollPercentage: number = 0;

  updateNavbarSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);

  private aboutLink: NavLink = {text: 'ABOUT', link: '/about', active: false};
  private portfolioLink: NavLink = {text: 'PORTFOLIO', link: '/portfolio', active: false};

  private navLinks: Array<NavLink> = [this.aboutLink,this.portfolioLink];

  constructor(private router: Router) {
    this.router.events
      .filter(event => {return event instanceof NavigationEnd})
      .subscribe(() => {
        this.detectActiveLink();
      });
  }

  setScrollPercentage(percentage: number){
    this.scrollPercentage = percentage;
    this.updateNavbarSubject.next(true);
  }

  getScrollPercentage(){
    return this.scrollPercentage;
  }

  getNavLinks(): Array<NavLink>{
    return this.navLinks;
  }

  detectActiveLink(){
    this.navLinks.forEach(link => {
      link.active = (location.pathname.includes(link.link));
      //console.log(link.active);
    });
  }

}
