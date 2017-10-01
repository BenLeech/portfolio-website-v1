import { Component, OnInit } from '@angular/core';
import {NavigationService} from "../../services/navigation.service";

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
})
export class SplashComponent implements OnInit {

  constructor(private navigationService: NavigationService) { }

  ngOnInit() {
    this.navigationService.setScrollPercentage(0.75);
    this.navigationService.updateNavbarSubject.next(false);
  }

}
