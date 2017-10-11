import {Component, OnInit, Input} from '@angular/core';
import {PortfolioElement} from "../../model/Portfolio-Element";
import {trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'portfolio-display',
  templateUrl: './portfolio-display.component.html',
  styleUrls: ['./portfolio-display.component.scss'],
  animations: [
    trigger('elementState', [
      state('inactive', style({
        opacity: 0,
        transform: 'translateY(50px)'

      })),
      state('visible',   style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      transition('* => visible', animate('500ms ease-out'))
    ])
  ]
})
export class PortfolioDisplayComponent implements OnInit {

  @Input() element: PortfolioElement;

  state: string = 'inactive';

  constructor() { }

  ngOnInit() {
  }

  triggerFadeIn(){
    this.state = 'visible';
  }

}
