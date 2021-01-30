import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, JsonpClientBackend, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ProductStock } from './classes/ProductStock';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  public url: string;
  public message: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/api/stock/';
  }

  public getStocks(stock: string): Observable<ProductStock[]> {
    return this.http.get<ProductStock[]>(this.url + stock);
  }
}
