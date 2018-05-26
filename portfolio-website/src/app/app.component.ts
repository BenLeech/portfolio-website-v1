import {Component, HostListener, OnInit, Renderer2} from '@angular/core';
import {Router, NavigationStart, NavigationEnd} from "@angular/router";
import { Location, PopStateEvent } from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Ben Leech';

  private lastPoppedUrl: string;
  private yScrollStack: number[] = [];
  private hasHoverClass = false;
  private lastTouchTime = new Date();

  constructor(private router: Router,
              private location: Location,
              private renderer: Renderer2){}

  ngOnInit(){
    this.location.subscribe((ev:PopStateEvent) => {
      this.lastPoppedUrl = ev.url;
    });

    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (event.url != this.lastPoppedUrl)
          this.yScrollStack.push(window.scrollY);
      } else if (event instanceof NavigationEnd) {
        if (event.url == this.lastPoppedUrl) {
          this.lastPoppedUrl = undefined;
          window.scrollTo(0, this.yScrollStack.pop());
        } else
          window.scrollTo(0, 0);
      }
    });

    this.enableHover();
  }

  @HostListener('mousemove')
  enableHover() {
    if((new Date().getTime() - this.lastTouchTime.getTime() < 500) || this.hasHoverClass){
      return;
    }

    this.renderer.addClass(document.body, 'hasHover');
    this.hasHoverClass = true;
  }

  @HostListener('touchstart')
  disableHover() {
    if (!this.hasHoverClass) return;

    this.renderer.removeClass(document.body, 'hasHover');
    this.hasHoverClass = false;
  }

  @HostListener('touchstart')
  updateLastTouchTime() {
    this.lastTouchTime = new Date();
  }

}
