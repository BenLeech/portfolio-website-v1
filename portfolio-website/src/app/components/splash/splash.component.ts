import { Component, OnInit } from '@angular/core';
import {PortfolioElement} from "../../model/Portfolio-Element";

const basePath = "../../../assets/img/portfolio/";

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
})
export class SplashComponent implements OnInit {

  testElement: PortfolioElement =
    {title: "University Professor Profile website", imagePath:basePath+"helloWorldProjectCover.png",
    tags: ['HTML', 'CSS', 'Version Control', 'Javascript', 'jQuery']};
  testElement2: PortfolioElement =
    {title: "Test", imagePath:basePath+"test.JPG"};



  constructor() { }

  ngOnInit() {
  }

}
