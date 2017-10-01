import { Component, OnInit } from '@angular/core';
import {NavigationService} from "../../services/navigation.service";

@Component({
  selector: 'about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  constructor(private navigationService: NavigationService) { }

  ngOnInit() {
    this.navigationService.setScrollPercentage(0);
    this.navigationService.updateNavbarSubject.next(true);
  }

}
