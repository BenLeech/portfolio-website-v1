import { Component, OnInit } from '@angular/core';
import {NavigationService} from "../../../services/navigation.service";
import {PortfolioService} from "../../../services/portfolio.service";
import {PortfolioElement} from "../../../model/Portfolio-Element";

@Component({
  selector: 'chris-soteros',
  templateUrl: './chris-soteros.component.html',
  styleUrls: ['../portfolio-template.scss']
})
export class ChrisSoterosComponent implements OnInit {

  portfolioElement: PortfolioElement;

  displayLeftArrow: boolean;
  displayRightArrow: boolean;

  constructor(private navigationService: NavigationService,
              private portfolioService: PortfolioService) { }

  ngOnInit() {
    this.navigationService.setScrollPercentage(0);

    this.portfolioElement = this.portfolioService.helloWorldProject;
    this.portfolioService.setCurrentPortfolioElement(this.portfolioService.helloWorldProject);
    this.displayRightArrow = !this.portfolioService.isLast(this.portfolioElement);
    this.displayLeftArrow = !this.portfolioService.isFirst(this.portfolioElement);
  }

  onNextArrowClick(){
    this.portfolioService.goToNext();
  }

  onBackArrowClick(): any{
    this.portfolioService.goBack();
  }

}
