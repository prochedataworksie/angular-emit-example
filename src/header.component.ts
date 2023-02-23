import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedDataService } from './shared-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private sharedData: SharedDataService) {}

  ngOnInit(): void {}

  onBoardSelected = (board: string): void => {
    this.sharedData.setBoard(board);
  };
}
