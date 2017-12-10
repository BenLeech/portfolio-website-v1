import {Directive, Input, ElementRef, OnInit, OnDestroy} from "@angular/core";
import {Observable, Subscription} from "rxjs";
@Directive({
  selector: '[parallax]'
})
export class ParallaxDirective implements OnInit, OnDestroy{
  @Input('speed')
  speed: number;
  @Input('backgroundUrl')
  backgroundUrl: string;

  private parallaxLayer;
  private scrollSubscription: Subscription;

  constructor(private el: ElementRef){
  }

  ngOnInit(){
    this.parallaxLayer = this.el.nativeElement;

    Observable.fromEvent(window, 'scroll').subscribe(() => this.parallax());

    //this.parallaxLayer.style.backgroundImage = 'url(' + this.backgroundUrl + ')';
    //this.parallaxLayer.style.backgroundAttachment = "fixed";
  }

  ngOnDestroy(){
    if(this.scrollSubscription)
      this.scrollSubscription.unsubscribe();
  }

  parallax(){
    if(this.speed == 0)
      this.parallaxLayer.style.backgroundPositionY = 0;
    else
      this.parallaxLayer.style.backgroundPositionY = -(window.pageYOffset / this.speed) + '%';
  }
}
