import { Component, OnInit } from '@angular/core';
import { SharedDataService } from './shared-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  constructor(private sharedData: SharedDataService) {}

  message: string;

  ngOnInit(): void {
    // logs out user on page load

    this.sharedData.data$.subscribe((message) => (this.message = message));
  }
}
