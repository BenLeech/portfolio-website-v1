import {Subscription, Observable} from "rxjs";
import {OnInit, OnDestroy, ElementRef, Directive} from "@angular/core";

@Directive({
  selector: '[fadeToTop]'
})
export class FadeToTopDirective implements OnInit, OnDestroy{

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

    if(((this.offsetTop + this.elementHeight) - window.scrollY) <= 75){
      this.el.nativeElement.style.opacity = (((this.offsetTop + this.elementHeight) - window.scrollY) <= 0)
        ? 0 : (((this.offsetTop + this.elementHeight) - window.scrollY) / 100);
    }else{
      this.el.nativeElement.style.opacity = 1;
    }
  }
}
