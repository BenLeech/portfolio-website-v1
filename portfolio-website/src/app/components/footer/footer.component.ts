import {Component, OnInit, OnDestroy} from '@angular/core';
import {Observable, Subject} from "rxjs";

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {

  linkedinPath: string = 'https://www.linkedin.com/in/ben-leech-4195b6126';
  githubPath: string = 'https://github.com/BenLeech';
  instagramPath: string = 'https://www.instagram.com/benleech_/';

  scrollSubject: Subject<void> = new Subject<void>();

  constructor() { }

  ngOnInit() {
    this.scrollSubject.switchMap(() => { return Observable.interval(1)
      .scan((acc, curr) => acc - 35, window.pageYOffset)
      .do(pos => window.scrollTo(0,pos))
      .takeWhile(val => val > 0)}).subscribe();
  }

  ngOnDestroy(){
    this.scrollSubject.unsubscribe();
  }

  scrollToTop(){
    this.scrollSubject.next();
  }

}
