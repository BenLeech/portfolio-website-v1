import {Component, OnInit, Input} from '@angular/core';
import {PortfolioElement} from "../../model/Portfolio-Element";

@Component({
  selector: 'portfolio-display',
  templateUrl: './portfolio-display.component.html',
  styleUrls: ['./portfolio-display.component.scss']
})
export class PortfolioDisplayComponent implements OnInit {

  @Input() element: PortfolioElement;

  constructor() { }

  ngOnInit() {
  }

}
