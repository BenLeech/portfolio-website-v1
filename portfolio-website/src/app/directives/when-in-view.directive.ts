import {Directive, Output, EventEmitter, OnDestroy, ElementRef, AfterViewInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";

@Directive({
  selector: '[whenInView]'
})
export class WhenInViewDirective implements OnDestroy, AfterViewInit{

  //FIXME: Add subscription on window resize

  @Output() whenInView: EventEmitter<void> = new EventEmitter<void>();

  elementHeight: number;
  offsetTop: number;
  windowHeight: number;

  scrollSubscription: Subscription;

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit(){
    this.subscribe();
  }

  ngOnDestroy(){
    this.unsubscribe();
  }

  getDimensions(){
    this.elementHeight = this.elementRef.nativeElement.offsetHeight;
    this.offsetTop = this.elementRef.nativeElement.offsetTop;

  }

  getWindowHeight(){
    this.windowHeight = window.innerHeight;
  }

  checkVisibility(){
    if((window.scrollY + this.windowHeight) >= this.offsetTop){
      this.whenInView.emit();
      this.unsubscribe();
    }
  }

  subscribe(){
    this.scrollSubscription = Observable.fromEvent(window, 'scroll').subscribe(() =>{
      this.getWindowHeight();
      this.getDimensions();
      this.checkVisibility();
    });
  }

  unsubscribe(){
    this.scrollSubscription.unsubscribe();
  }

}
