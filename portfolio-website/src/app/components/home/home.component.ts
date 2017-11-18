import {Component, OnInit, ElementRef, Renderer2} from '@angular/core';
import {NavigationService} from "../../services/navigation.service";

@Component({
  selector: 'app-splash',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private navigationService: NavigationService, private renderer: Renderer2) { }

  ngOnInit() {
    this.navigationService.setScrollPercentage(0.75);
    this.navigationService.updateNavbarSubject.next(false);
  }

  triggerFadeIn(el: ElementRef){
    this.renderer.addClass(el.nativeElement, 'enter-view');
  }

}
