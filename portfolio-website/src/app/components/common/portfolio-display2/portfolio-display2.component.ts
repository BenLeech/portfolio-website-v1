import {Component, OnInit, Input, ElementRef, Renderer2} from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';
import {Router} from "@angular/router";
import {PortfolioElement} from "../../../model/Portfolio-Element";

@Component({
  selector: 'portfolio-display2',
  templateUrl: './portfolio-display2.component.html',
  styleUrls: ['./portfolio-display2.component.scss'],
})
export class PortfolioDisplay2Component implements OnInit {

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
