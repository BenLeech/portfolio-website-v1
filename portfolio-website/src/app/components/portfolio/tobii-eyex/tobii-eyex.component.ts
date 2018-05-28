import {Component, OnInit} from "@angular/core";
import {PortfolioService} from "../../../services/portfolio.service";
import {NavigationService} from "../../../services/navigation.service";
import {PortfolioElement} from "../../../model/Portfolio-Element";
@Component({
  selector: 'tobii-eyex',
  templateUrl: './tobii-eyex.component.html',
  styleUrls: ['../portfolio-template.scss']
})
export class TobiiEyeXComponent implements OnInit{

  portfolioElement: PortfolioElement;

  displayLeftArrow: boolean;
  displayRightArrow: boolean;

  constructor(private navigationService: NavigationService,
              private portfolioService: PortfolioService) { }

  ngOnInit() {
    this.navigationService.setScrollPercentage(0);

    this.portfolioElement = this.portfolioService.tobiiEyeX;
    this.portfolioService.setCurrentPortfolioElement(this.portfolioElement);
    this.displayRightArrow = !this.portfolioService.isLast(this.portfolioElement);
    this.displayLeftArrow = !this.portfolioService.isFirst(this.portfolioElement);
  }

  onNextArrowClick(){
    this.portfolioService.goToNext();
  }

  onBackArrowClick(){
    this.portfolioService.goBack();
  }

}
