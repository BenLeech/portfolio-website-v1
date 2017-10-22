import { Component, OnInit } from '@angular/core';
import {NavigationService} from "../../services/navigation.service";
import {Observable} from "rxjs";
import {trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  animations: [
    trigger('elementState', [
      state('inactive', style({
        opacity: 0,
        transform: 'translateY(50px)'

      })),
      state('visible',   style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      transition('* => visible', animate('500ms ease-out'))
    ]),
    trigger('educationState', [
      state('inactive', style({
        opacity: 0,
        transform: 'translateY(50px)'

      })),
      state('visible',   style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      transition('* => visible', animate('500ms ease-out'))
    ])
  ]
})
export class AboutMeComponent implements OnInit {

  enjoyWords: Array<string> = ["trying new food.", "playing indie games.", "functional programming.",
  "petting dogs.", "new technologies.", "alternative music.", "playing saxophone.", "rewatching the Office."];
  displayWord: string = "";

  state: string = 'inactive'; //FIXME: Make education and experience components
  educationState: string = 'inactive';

  constructor(private navigationService: NavigationService) { }

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

  triggerFadeIn(){
    this.state = 'visible';
  }

  triggerEducationFadeIn(){ //FIXME: Remove once education/experience are separated into components
    this.educationState = 'visible';
  }

}
