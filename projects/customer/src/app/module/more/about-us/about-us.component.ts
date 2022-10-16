import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../../core/services/loader/loader.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit {
  constructor( public loaderService: LoaderService) {}

  ngOnInit(): void {}
}
