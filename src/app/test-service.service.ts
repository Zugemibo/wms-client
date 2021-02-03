import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, JsonpClientBackend, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ProductStock } from './classes/ProductStock';
import { Order } from './classes/Order';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  public url: string;
  public message: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080';
  }

  public getStocks(stock: string): Observable<ProductStock[]> {
    return this.http.get<ProductStock[]>(this.url + '/api/stock/' + stock);
  }

  public addMovement(data): any {
    return this.http.post(this.url + '/api/move/unitMove', data, { responseType: 'json' })
      .subscribe();
  }
  public getUncompletedOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.url + '/api/order/orders');
  }
}
