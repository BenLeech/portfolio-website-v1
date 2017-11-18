import {Subscription, Observable} from "rxjs";
import {OnInit, OnDestroy, ElementRef, Directive} from "@angular/core";

@Directive({
  selector: '[fadeToTop]'
})
export class FadeToTopDirective implements OnInit, OnDestroy{

  private scrollSubscription: Subscription;
  private offsetTop: number;

  constructor(private el: ElementRef){}

  ngOnInit(){
    this.scrollSubscription = Observable.fromEvent(window, 'scroll').subscribe(() => this.handleScroll());
    this.offsetTop = this.el.nativeElement.offsetTop;
    console.log(this.offsetTop);
  }

  ngOnDestroy(){
    if(this.scrollSubscription)
      this.scrollSubscription.unsubscribe();
  }

  handleScroll(){
    this.offsetTop = this.el.nativeElement.offsetTop;

    if((this.offsetTop - window.scrollY) <= 75){
      this.el.nativeElement.style.opacity = ((this.offsetTop - window.scrollY) <= 0)
        ? 0 : ((this.offsetTop - window.scrollY) / 75);
    }else{
      this.el.nativeElement.style.opacity = 1;
    }
  }
}
