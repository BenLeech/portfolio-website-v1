import { Component, OnInit } from '@angular/core';
import {PortfolioElement} from "../../model/Portfolio-Element";
import {PortfolioService} from "../../services/portfolio.service";

@Component({
  selector: 'featured-work',
  templateUrl: './featured-work.component.html',
  styleUrls: ['./featured-work.component.scss']
})
export class FeaturedWorkComponent implements OnInit {

  featuredWork: Array<PortfolioElement>;

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit() {
    this.featuredWork = this.portfolioService.getFeaturedPortfolioWork();
  }

}
