import {Component, OnInit, ElementRef, Renderer2} from '@angular/core';
import {NavigationService} from "../../services/navigation.service";
import {Observable} from "rxjs";

@Component({
  selector: 'about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  enjoyWords: Array<string> = ["trying new foods.", "playing indie games.", "functional programming.",
  "petting dogs.", "new technologies.", "alternative music.", "playing the saxophone.", "rewatching the Office."];
  displayWord: string = "";

  constructor(private navigationService: NavigationService, private renderer: Renderer2) { }

  ngOnInit() {
    this.navigationService.setScrollPercentage(0);

    let counter: number = 0;
    let i: number = 0;
    let backspace: boolean = false;
    let pauseTyping: boolean = false;
    let cursorCounter: number = 0;
    let cursorExists: boolean = false;

    Observable.interval(100).subscribe(() => {
      if(counter >= this.enjoyWords.length) //reset to first word
        counter = 0;

      if(i >= this.enjoyWords[counter].length){ //reached end of word
        i = 0;
        pauseTyping = true;
        backspace = true;
      }

      if(pauseTyping == true){
        cursorCounter++;

        if(cursorCounter % 5 === 0){
          if(cursorExists){
            this.displayWord = this.displayWord.slice(0,this.displayWord.length-1);
            cursorExists = false;
          }else {
            this.displayWord += "|";
            cursorExists = true;
          }
        }

        if(cursorCounter >= 20){
          cursorCounter = 0;
          pauseTyping = false;
        }
      }else if(backspace == true && pauseTyping == false){
        if(this.displayWord.length > 0){
          this.displayWord = this.displayWord.slice(0,this.displayWord.length-1);
        }else{
          backspace = false;
          counter++;
          this.displayWord = "";
        }
      }else{
        this.displayWord += this.enjoyWords[counter].charAt(i);
        i++;
      }

    });
  }

  triggerFadeIn(el: ElementRef){
    this.renderer.addClass(el.nativeElement, 'enter-view');
  }

}
