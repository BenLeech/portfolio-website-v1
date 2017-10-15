import { Component, OnInit } from '@angular/core';
import {NavigationService} from "../../../services/navigation.service";

@Component({
  selector: 'app-chris-soteros',
  templateUrl: './chris-soteros.component.html',
  styleUrls: ['./chris-soteros.component.scss']
})
export class ChrisSoterosComponent implements OnInit {

  constructor(private navigationService: NavigationService) { }

  ngOnInit() {
    this.navigationService.setScrollPercentage(0);
    this.navigationService.updateNavbarSubject.next(true);
  }

}
