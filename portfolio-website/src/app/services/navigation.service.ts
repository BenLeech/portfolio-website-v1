import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable()
export class NavigationService{

  private scrollPercentage: number = 0;
  updateNavbarSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() { }

  setScrollPercentage(percentage: number){
    this.scrollPercentage = percentage;
  }

  getScrollPercentage(){
    return this.scrollPercentage;
  }

}
