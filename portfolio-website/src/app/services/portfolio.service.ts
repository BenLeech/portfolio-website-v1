import { Injectable } from '@angular/core';
import {PortfolioElement} from "../model/Portfolio-Element";

const basePath = "/assets/img/portfolio/";

@Injectable()
export class PortfolioService {

  private helloWorldProject: PortfolioElement =
    {title: "University Professor Profile website", imagePath:basePath+"helloWorldProjectCover.png",
      tags: ['HTML', 'CSS', 'Version Control', 'Javascript', 'jQuery']};
  private testElement: PortfolioElement =
    {title: "Test", imagePath:basePath+"test.JPG"};

  constructor() { }

  getFeaturedPortfolioWork(): Array<PortfolioElement>{
    return [this.helloWorldProject, this.testElement];
  }

  getPortfolioWork(): Array<PortfolioElement>{
    return [this.helloWorldProject];
  }

}
