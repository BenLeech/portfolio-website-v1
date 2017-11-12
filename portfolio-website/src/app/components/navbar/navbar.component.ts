import {Component, OnInit, OnDestroy} from '@angular/core';
import {NavLink} from "../../model/Nav-Link";
import {NavigationService} from "../../services/navigation.service";
import {trigger, state, style, animate, transition} from '@angular/animations';
import {Router, NavigationEnd} from "@angular/router";
import {Subscription, Observable} from "rxjs";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('navBarState', [
      state('inactive', style({
        'height': '0'
      })),
      state('mobileMenu',   style({'height': '100%' })),
      transition('inactive <=> mobileMenu', [animate('200ms ease')]),
    ])
  ]
})

export class NavbarComponent implements OnInit, OnDestroy {

  //FIXME: Use subscription with Observable.fromEvent for scroll
  //FIXME: make an onDestroy unsubscribe

  showDropdown: boolean = false;
  showNav: boolean = false;

  state: string = 'inactive';

  navLinks:Array<NavLink> = [];

  scrollSubscription: Subscription;
  resizeSubscription: Subscription;

  linkedinPath: string = 'https://www.linkedin.com/in/ben-leech-4195b6126';
  githubPath: string = 'https://github.com/BenLeech';
  instagramPath: string = 'https://www.instagram.com/benleech_/';

  constructor(private navigationService: NavigationService, private router: Router){}

  ngOnInit() {
    this.navLinks = this.navigationService.getNavLinks();

    this.navigationService.updateNavbarSubject.subscribe(value => {
      this.showNav = value;
    });

    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd){
        this.showDropdown = false;
        this.state = 'inactive';
      }
    });

    this.scrollSubscription = Observable.fromEvent(window, 'scroll').subscribe(() => this.handleScrollEvent());
    this.resizeSubscription = Observable.fromEvent(window, 'resize').subscribe(() => this.handleResizeEvent());
  }

  ngOnDestroy(){
    this.resizeSubscription.unsubscribe();
    this.scrollSubscription.unsubscribe();
  }

  toggleDropdown(){
    this.showDropdown = !this.showDropdown;
    this.state = (this.showDropdown) ? 'mobileMenu' : 'inactive';
  }

  handleScrollEvent(){
    this.showNav = (this.navigationService.getScrollPercentage() === 0) ? true :
      (window.pageYOffset > (window.innerHeight * this.navigationService.getScrollPercentage()));
  }

  handleResizeEvent(){
    if(this.showDropdown && window.innerWidth > 780) {
      this.showDropdown = false;
      this.state = 'inactive';
    }
  }

}
