import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  private good: any;
  public test(): Promise<any>{
    return this.http.get<any>("./assets/config/config.json").pipe(tap(
      res=>{
        this.good=res;
      }
    )).toPromise();
  }
  public test1(){
    return this.good;
  }
}
