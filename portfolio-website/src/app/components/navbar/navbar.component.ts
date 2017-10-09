import {Component, OnInit, HostListener} from '@angular/core';
import {NavLink} from "../../model/Nav-Link";
import {Router} from '@angular/router';
import {NavigationService} from "../../services/navigation.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  //FIXME: Use subscription with Observable.fromEvent for scroll
  //FIXME: make an onDestroy unsubscribe

  showDropdown: boolean = false;
  showNav: boolean = false;

  navLinks:Array<NavLink> = [];

  constructor(private router: Router, private navigationService: NavigationService){}

  ngOnInit() {
    this.getNavLinks();
    this.navigationService.updateNavbarSubject.subscribe(value => {
      this.showNav = value;
    });
  }

  toggleDropdown(){
    this.showDropdown = !this.showDropdown;
  }

  @HostListener('window:scroll', [])
  handleScrollEvent(){
    this.showNav = (this.navigationService.getScrollPercentage() === 0) ? true :
      (window.pageYOffset > (window.innerHeight * this.navigationService.getScrollPercentage()));
  }

  private getNavLinks(){
    let aboutLink: NavLink = {text: 'About', link: '/about'};
    let portfolioLink: NavLink = {text: 'Portfolio', link: 'home'};

    this.navLinks = [aboutLink,portfolioLink];
  }

}
