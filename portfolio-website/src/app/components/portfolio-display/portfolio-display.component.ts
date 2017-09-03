import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-portfolio-display',
  templateUrl: './portfolio-display.component.html',
  styleUrls: ['./portfolio-display.component.scss']
})
export class PortfolioDisplayComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
