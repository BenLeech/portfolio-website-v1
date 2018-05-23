import {Subscription, Observable} from "rxjs";
import {OnInit, OnDestroy, ElementRef, Directive, Input} from "@angular/core";

@Directive({
  selector: '[fadeToTop]'
})
export class FadeToTopDirective implements OnInit, OnDestroy{

  @Input('fadePercentage')
  private fadePercentage: number = 75;

  private scrollSubscription: Subscription;
  private offsetTop: number;
  private elementHeight: number;

  constructor(private el: ElementRef){}

  ngOnInit(){
    this.scrollSubscription = Observable.fromEvent(window, 'scroll').subscribe(() => this.handleScroll());
    this.offsetTop = this.el.nativeElement.offsetTop;
    this.elementHeight = this.el.nativeElement.offsetHeight;
  }

  ngOnDestroy(){
    if(this.scrollSubscription)
      this.scrollSubscription.unsubscribe();
  }

  handleScroll(){
    this.offsetTop = this.el.nativeElement.offsetTop;
    if(((this.offsetTop + this.elementHeight) - window.scrollY) <= (this.elementHeight + 75)){
      this.el.nativeElement.style.opacity = (((this.offsetTop + this.elementHeight) - window.scrollY) <= 0)
        ? 0 : (((this.offsetTop + this.elementHeight - 75) - window.scrollY) / 200);
    }else{
      this.el.nativeElement.style.opacity = 1;
    }
  }
}
