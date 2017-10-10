import { Component, OnInit, Input } from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'skill-bar',
  templateUrl: './skill-bar.component.html',
  styleUrls: ['./skill-bar.component.scss'],
  animations: [
    trigger('skillBarState', [
      state('inactive', style({
        width: '0'
      })),
      state('visible',   style({width: "{{barWidth}}" }), {params: {barWidth: '0'}}),
      transition('inactive => visible', [animate('1000ms ease-out')])
    ])
  ]
})
export class SkillBarComponent implements OnInit {

  @Input() skillName: string = "";
  @Input() skillPercent: number = 0;

  skillWidth: string = '0';

  state: string = 'inactive';

  constructor() { }

  ngOnInit() {
    if(this.skillPercent > 100)
      this.skillPercent = 100;
    if(this.skillPercent < 0)
      this.skillPercent = 0;

    this.skillWidth = this.getSkillPercent();
  }

  getSkillPercent(): string{
    return this.skillPercent + "%";
  }

  triggerAnimation(){
    this.state = 'visible';
  }

}
