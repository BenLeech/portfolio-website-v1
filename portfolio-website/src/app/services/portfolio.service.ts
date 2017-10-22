import { Injectable } from '@angular/core';
import {PortfolioElement} from "../model/Portfolio-Element";

const basePath = "/assets/img/portfolio/";

@Injectable()
export class PortfolioService {

  private helloWorldProject: PortfolioElement =
    {title: "University Professor Profile website", imagePath:basePath+"helloWorldProjectCover.png",
      tags: ['Web Development'], linkPath: '/uni-prof-portfolio'};
  private testElement: PortfolioElement =
    {title: "Test", imagePath:basePath+"test.JPG", tags: ['test, PC: Kathryn Cullen']};
  private miri: PortfolioElement =
    {title: "Miri", imagePath:basePath+"miri_mockup.jpg", tags: ['Game Development']};

  constructor() { }

  getFeaturedPortfolioWork(): Array<PortfolioElement>{
    return [this.helloWorldProject, this.testElement, this.miri];
  }

  getPortfolioWork(): Array<PortfolioElement>{
    return [this.helloWorldProject, this.miri];
  }

}
