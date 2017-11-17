import {Component, OnInit, Input, ElementRef, Renderer2} from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';
import {Router} from "@angular/router";
import {PortfolioElement} from "../../../model/Portfolio-Element";

@Component({
  selector: 'portfolio-display',
  templateUrl: './portfolio-display.component.html',
  styleUrls: ['./portfolio-display.component.scss'],
})
export class PortfolioDisplayComponent implements OnInit {

  @Input() element: PortfolioElement;

  constructor(private router: Router, private renderer: Renderer2) { }

  ngOnInit() {
  }

  goToLink(){
    if(this.element.linkPath) this.router.navigate([this.element.linkPath]);
  }

  triggerFadeIn(el: ElementRef){
    this.renderer.addClass(el.nativeElement, 'enter-view');
  }

}
