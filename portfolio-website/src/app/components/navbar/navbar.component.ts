import {Component, OnInit, HostListener} from '@angular/core';
import {NavLink} from "../../model/Nav-Link";
import {RouterLink, Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  showDropdown: boolean = false;
  showNav: boolean = false;

  navLinks:Array<NavLink> = [];

  constructor(private router: Router){

  }

  ngOnInit() {
    this.getNavLinks();
  }

  toggleDropdown(){
    this.showDropdown = !this.showDropdown;
  }

  @HostListener('window:scroll', [])
  handleScrollEvent(){
    this.showNav = (window.pageYOffset > (window.innerHeight * 0.75));
  }

  navigateToLink(navLink: NavLink){
    console.log("hi");
    this.router.navigate([navLink.link]);
  }

  private getNavLinks(){
    let aboutLink: NavLink = {text: 'About', link: './'};
    let portfolioLink: NavLink = {text: 'Portfolio', link: './'};

    this.navLinks = [aboutLink,portfolioLink];
  }

}
