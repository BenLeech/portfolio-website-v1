import { Component, OnInit } from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';


@Component({
  selector: 'greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss'],
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
export class GreetingComponent implements OnInit {

  state: string = 'inactive';

  constructor() { }

  ngOnInit() {
  }

  triggerFadeIn(){
    this.state = 'visible';
  }

}
