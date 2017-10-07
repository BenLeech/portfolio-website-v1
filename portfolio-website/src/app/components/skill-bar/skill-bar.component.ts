import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'skill-bar',
  templateUrl: './skill-bar.component.html',
  styleUrls: ['./skill-bar.component.scss']
})
export class SkillBarComponent implements OnInit {

  @Input() skillName: string = "";
  @Input() skillPercent: number = 0;

  constructor() { }

  ngOnInit() {
    if(this.skillPercent > 100)
      this.skillPercent = 100;
    if(this.skillPercent < 0)
      this.skillPercent = 0;
  }

  getSkillPercent(): string{
    return this.skillPercent + "%";
  }

}
