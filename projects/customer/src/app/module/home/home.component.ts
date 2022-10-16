import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CarouselImages, CategoryImages, CategoryLinkModel, Home } from '../../core/models/home/home.model';
import { HomeService } from '../../core/services/home/home.service';
//import { LoaderService } from '../../core/services/loader/loader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit,  OnDestroy{

  categoryLinks: CategoryLinkModel[];
  carouselImages: CarouselImages[];
  categoryImages: CategoryImages[];
  subscription: Subscription;
  isLoading=false;

  constructor(private readonly homeService: HomeService) {
    this.isLoading=true;
  }

  ngOnInit(): void {
    this.subscription = this.homeService.GetCategories().subscribe(
      response => {
        this.categoryLinks= response.CategoryLinks;
        this.carouselImages= response.CarouselImages;
        this.categoryImages= response.CategoryImages;
        this.isLoading=false;
      }
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe;
  }

}
