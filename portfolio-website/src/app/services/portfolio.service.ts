import { Injectable } from '@angular/core';
import {PortfolioElement} from "../model/Portfolio-Element";
import {Router} from "@angular/router";

const basePath = "/assets/img/portfolio/";

@Injectable()
export class PortfolioService {

  helloWorldProject: PortfolioElement =
    {title: "University Professor Profile website", imagePath:basePath+"helloWorldProjectCover.png",
      tags: ['Web Development'], linkPath: '/uni-prof-portfolio'};
  miri: PortfolioElement =
    {title: "Miri", imagePath:basePath+"miri_mockup.jpg", tags: ['Game Development'], linkPath: '/miri-game'};

  portfolioWork: Array<PortfolioElement> = [];
  featuredWork: Array<PortfolioElement> = [];

  private currentPortfolioElement: PortfolioElement;

  constructor(private router: Router) {
    this.portfolioWork = [this.helloWorldProject, this.miri];
    this.featuredWork = [this.helloWorldProject, this.miri];
  }

  getFeaturedPortfolioWork(): Array<PortfolioElement>{
    return this.featuredWork;
  }

  getPortfolioWork(): Array<PortfolioElement>{
    return this.portfolioWork;
  }

  getCurrentPortfolioElement(): PortfolioElement{
    return this.currentPortfolioElement;
  }

  setCurrentPortfolioElement(project: PortfolioElement){
    this.currentPortfolioElement = project;
  }

  getIndex(project: PortfolioElement){
    return this.portfolioWork.indexOf(project);
  }

  isFirst(project: PortfolioElement): boolean {
    return project == this.portfolioWork[0];
  }

  isLast(project: PortfolioElement): boolean {
    return project == this.portfolioWork[this.portfolioWork.length-1];
  }

  goToNext(){
    const index = this.getIndex(this.currentPortfolioElement);
    if(index == this.portfolioWork.length-1 || index == -1)
      return;

    this.currentPortfolioElement = this.portfolioWork[index + 1];
    this.router.navigate([this.currentPortfolioElement.linkPath]);
  }

  goBack(){
    const index = this.getIndex(this.currentPortfolioElement);
    if(index <= 0)
      return;

    this.currentPortfolioElement = this.portfolioWork[index -1];
    this.router.navigate([this.currentPortfolioElement.linkPath]);
  }

  goToFirst(){
    this.currentPortfolioElement = this.portfolioWork[0];
  }

  goToLast(){
    this.currentPortfolioElement = this.portfolioWork[this.portfolioWork.length-1];
  }

  getNextTitle(): string{
    const index = this.getIndex(this.currentPortfolioElement);
    if(index == this.portfolioWork.length-1 || index == -1)
      return '';

    return this.portfolioWork[index+1].title;
  }

  getLastTitle(): string{
    const index = this.getIndex(this.currentPortfolioElement);
    if(index <= 0)
      return '';

    return this.portfolioWork[index-1].title;
  }

}
