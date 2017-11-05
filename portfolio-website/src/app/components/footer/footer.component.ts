import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  linkedinPath: string = 'https://www.linkedin.com/in/ben-leech-4195b6126';
  githubPath: string = 'https://github.com/BenLeech';
  instagramPath: string = 'https://www.instagram.com/benleech_/';

  constructor() { }

  ngOnInit() {
  }

}
