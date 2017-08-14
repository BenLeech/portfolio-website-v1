import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  showDropdown: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleDropdown(){
    this.showDropdown = !this.showDropdown;
  }

}
