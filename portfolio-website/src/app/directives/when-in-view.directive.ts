import {Directive, Output, EventEmitter, OnDestroy, ElementRef, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";

@Directive({
  selector: '[whenInView]'
})
export class WhenInViewDirective implements OnDestroy, OnInit{

  @Output() whenInView: EventEmitter<void> = new EventEmitter<void>();

  elementHeight: number;
  offsetTop: number;
  windowHeight: number;

  scrollSubscription: Subscription;
  resizeSubscription: Subscription;

  constructor(private elementRef: ElementRef) { }

  ngOnInit(){
    this.updateInfo();
    this.scrollSubscription = Observable.fromEvent(window, 'scroll').subscribe(() => this.updateInfo());
    this.resizeSubscription = Observable.fromEvent(window, 'resize').subscribe(() => this.updateInfo());
  }

  ngOnDestroy(){
    this.unsubscribeAll();
  }

  getDimensions(){
    this.elementHeight = this.elementRef.nativeElement.offsetHeight;
    this.offsetTop = this.elementRef.nativeElement.offsetTop;
  }

  getWindowHeight(){
    this.windowHeight = window.innerHeight;
  }

  checkVisibility(){
    if((window.scrollY + this.windowHeight) >= (this.offsetTop + (this.elementHeight/2))){
      this.whenInView.emit();
      this.unsubscribeAll();
    }
  }

  updateInfo(){
    this.getWindowHeight();
    this.getDimensions();
    this.checkVisibility();
  }

  unsubscribeAll(){
    if(this.scrollSubscription) this.scrollSubscription.unsubscribe();
    if(this.resizeSubscription) this.resizeSubscription.unsubscribe();
  }

}
