import { Component, OnInit } from '@angular/core';
import {NavigationService} from "../../../services/navigation.service";

@Component({
  selector: 'miri',
  templateUrl: './miri.component.html',
  styleUrls: ['./miri.component.scss']
})
export class MiriComponent implements OnInit {

  constructor(private navigationService: NavigationService) { }

  ngOnInit() {
    this.navigationService.setScrollPercentage(0);
  }

}
