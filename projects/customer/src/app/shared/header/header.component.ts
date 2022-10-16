import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  /**
   * Boolean variable used to check weather user is login or not
   */
  isUserLoginIn: boolean = true;
  constructor() {}

  ngOnInit(): void {}
}
