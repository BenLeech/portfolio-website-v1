import {Component, OnInit, HostListener} from '@angular/core';
import {NavLink} from "../../model/Nav-Link";
import {NavigationService} from "../../services/navigation.service";
import {trigger, state, style, animate, transition} from '@angular/animations';

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

export class NavbarComponent implements OnInit {

  //FIXME: Use subscription with Observable.fromEvent for scroll
  //FIXME: make an onDestroy unsubscribe

  showDropdown: boolean = false;
  showNav: boolean = false;

  state: string = 'inactive';

  navLinks:Array<NavLink> = [];

  constructor(private navigationService: NavigationService){}

  ngOnInit() {
    this.getNavLinks();
    this.navigationService.updateNavbarSubject.subscribe(value => {
      this.showNav = value;
    });
  }

  toggleDropdown(){
    this.showDropdown = !this.showDropdown;
    this.state = (this.showDropdown) ? 'mobileMenu' : 'inactive';
  }

  @HostListener('window:scroll', [])
  handleScrollEvent(){
    this.showNav = (this.navigationService.getScrollPercentage() === 0) ? true :
      (window.pageYOffset > (window.innerHeight * this.navigationService.getScrollPercentage()));
  }

  private getNavLinks(){
    let aboutLink: NavLink = {text: 'ABOUT', link: '/about'};
    let portfolioLink: NavLink = {text: 'PORTFOLIO', link: '/portfolio'};

    this.navLinks = [aboutLink,portfolioLink];
  }

}
