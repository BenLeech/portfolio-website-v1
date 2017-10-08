import { Component, OnInit } from '@angular/core';
import {NavigationService} from "../../services/navigation.service";
import {Observable} from "rxjs";

@Component({
  selector: 'about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  enjoyWords: Array<string> = ["trying new food.", "playing indie games.", "functional programming.",
  "petting dogs.", "new technologies.", "alternative music.", "playing saxophone.", "rewatching the Office."];
  currentEnjoyWord: string = this.enjoyWords[0];

  constructor(private navigationService: NavigationService) { }

  ngOnInit() {
    this.navigationService.setScrollPercentage(0);
    this.navigationService.updateNavbarSubject.next(true);

    let counter: number = 0;
    Observable.interval(3500).subscribe(x => {
      if(counter >= this.enjoyWords.length)
        counter = 0;

      this.currentEnjoyWord = this.enjoyWords[counter];
      counter++;
    });
  }

}
