import {Component, OnInit, HostListener} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  showDropdown: boolean = false;
  showNav: boolean = false;

  ngOnInit() {

  }

  toggleDropdown(){
    this.showDropdown = !this.showDropdown;
  }

  @HostListener('window:scroll', ['$event'])
  handleScrollEvent(){
    this.showNav = (window.pageYOffset > (window.innerHeight * 0.75));
  }

}
