import { Component, OnInit } from '@angular/core';
import {NavigationService} from "../../services/navigation.service";
import {PortfolioElement} from "../../model/Portfolio-Element";
import {PortfolioService} from "../../services/portfolio.service";

@Component({
  selector: 'portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  myWork: Array<PortfolioElement> = [];

  constructor(private navigationService: NavigationService, private portfolioService: PortfolioService) { }

  ngOnInit() {
    this.navigationService.setScrollPercentage(0);
    this.navigationService.updateNavbarSubject.next(true);

    this.myWork = this.portfolioService.getPortfolioWork();
  }

}
