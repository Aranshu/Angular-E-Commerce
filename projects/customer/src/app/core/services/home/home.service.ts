import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Home } from '../../models/home/home.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  public GetCategories(): Observable<Home>{
    return this.http.get<Home>("./assets/data/home/home.json")
  }
}
